import { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Shield, Copy, CheckCircle, 
  AlertCircle, Smartphone 
} from 'lucide-react';
import auth from '../../utils/auth';

const TwoFactorSetup = ({ onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [qrCode, setQrCode] = useState('');
  const [backupCodes, setBackupCodes] = useState([]);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const initiate2FA = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await auth.post('/api/auth/2fa/setup/');
      setQrCode(response.data.qr_code);
      setBackupCodes(response.data.backup_codes);
      setStep(2);
    } catch (error) {
      setError('Failed to initialize 2FA setup');
    } finally {
      setIsLoading(false);
    }
  };

  const verify2FA = async () => {
    setIsLoading(true);
    setError('');

    try {
      await auth.post('/api/auth/2fa/verify/', {
        code: verificationCode
      });
      setStep(3);
    } catch (error) {
      setError('Invalid verification code');
    } finally {
      setIsLoading(false);
    }
  };

  const complete2FA = async () => {
    try {
      await auth.post('/api/auth/2fa/enable/');
      onSuccess();
    } catch (error) {
      setError('Failed to enable 2FA');
    }
  };

  const copyBackupCodes = () => {
    navigator.clipboard.writeText(backupCodes.join('\n'));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-auto"
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-wine-700" />
        <h2 className="text-xl font-bold text-gray-900">
          Two-Factor Authentication Setup
        </h2>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Step 1: Introduction */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <p className="text-gray-600">
            Two-factor authentication adds an extra layer of security to your account. 
            Once enabled, you'll need to enter a verification code from your 
            authenticator app when signing in.
          </p>

          <div className="space-y-2">
            <h3 className="font-medium text-gray-900">You'll need:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>An authenticator app (Google Authenticator, Authy, etc.)</span>
              </li>
            </ul>
          </div>

          <button
            onClick={initiate2FA}
            disabled={isLoading}
            className={`
              w-full py-2.5 rounded-lg text-white
              transition duration-300 ease-in-out
              ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-wine-700 hover:bg-wine-800'
              }
            `}
          >
            {isLoading ? 'Setting up...' : 'Begin Setup'}
          </button>
        </motion.div>
      )}

      {/* Step 2: QR Code Scan */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">
              1. Scan this QR code with your authenticator app
            </h3>
            <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
              <QRCodeSVG value={qrCode} size={200} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">
              2. Enter the verification code from your app
            </h3>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
              maxLength={6}
            />
          </div>

          <button
            onClick={verify2FA}
            disabled={isLoading || verificationCode.length !== 6}
            className={`
              w-full py-2.5 rounded-lg text-white
              transition duration-300 ease-in-out
              ${isLoading || verificationCode.length !== 6
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-wine-700 hover:bg-wine-800'
              }
            `}
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>
        </motion.div>
      )}

      {/* Step 3: Backup Codes */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Save your backup codes</h3>
            <p className="text-gray-600 text-sm">
              Keep these backup codes safe. You can use them to access your account if 
              you lose your authenticator device.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                {backupCodes.map((code, index) => (
                  <div
                    key={index}
                    className="font-mono text-sm text-gray-800 bg-white px-3 py-1.5 rounded border border-gray-200"
                  >
                    {code}
                  </div>
                ))}
              </div>
              <button
                onClick={copyBackupCodes}
                className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Codes</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setBackupCodesConfirmed(e.target.checked)}
                className="form-checkbox h-4 w-4 text-wine-700 rounded focus:ring-wine-500"
              />
              <span className="text-sm text-gray-700">
                I have saved these backup codes in a safe place
              </span>
            </label>

            <button
              onClick={complete2FA}
              disabled={!backupCodesConfirmed || isLoading}
              className={`
                w-full py-2.5 rounded-lg text-white
                transition duration-300 ease-in-out
                ${!backupCodesConfirmed || isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-wine-700 hover:bg-wine-800'
                }
              `}
            >
              {isLoading ? 'Enabling...' : 'Enable Two-Factor Authentication'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Cancel Button */}
      <button
        onClick={onClose}
        className="mt-4 w-full py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
    </motion.div>
  );
};

// Update the Security tab in Account.jsx to include the 2FA setup modal
const SecurityTab = () => {
  const [show2FASetup, setShow2FASetup] = useState(false);
  const { user, refetchUser } = useUser();

  const handle2FASuccess = async () => {
    await refetchUser();
    setShow2FASetup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* ... existing password change form ... */}

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        
        {user?.has_2fa ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
            <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-800 font-medium">
                Two-factor authentication is enabled
              </p>
              <p className="text-green-600 text-sm mt-1">
                Your account is protected with an additional layer of security.
              </p>
              <button
                onClick={() => setShow2FASetup(true)}
                className="mt-3 text-sm text-wine-700 hover:text-wine-800"
              >
                Reconfigure 2FA
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 mb-4">
              Protect your account with two-factor authentication.
            </p>
            <button
              onClick={() => setShow2FASetup(true)}
              className="px-4 py-2 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
            >
              Enable 2FA
            </button>
          </div>
        )}
      </div>

      {/* Security Log */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Security Activity Log
        </h3>
        <div className="space-y-4">
          {securityLogs.map((log, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              {log.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-gray-900">{log.message}</p>
                <p className="text-sm text-gray-500">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2FA Setup Modal */}
      {show2FASetup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <TwoFactorSetup
            onClose={() => setShow2FASetup(false)}
            onSuccess={handle2FASuccess}
          />
        </div>
      )}
    </motion.div>
  );
};