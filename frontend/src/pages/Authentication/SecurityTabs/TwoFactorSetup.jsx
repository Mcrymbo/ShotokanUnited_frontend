import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Copy, CheckCircle, 
  AlertTriangle, Smartphone, QrCode
} from 'lucide-react';
import auth from '../../../utils/auth';

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
      const response = await auth.post('/api/auth/2fa/generate/');
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-auto">
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
          <AlertTriangle className="w-5 h-5 text-red-600" />
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
            <h3 className="font-medium text-gray-900">Requirements:</h3>
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
              1. Scan QR Code
            </h3>
            <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
              <img 
                src={qrCode} 
                alt="2FA QR Code"
                className="w-48 h-48"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">
              2. Enter Verification Code
            </h3>
            <div className="flex space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                  value={verificationCode[index] || ''}
                  onChange={(e) => {
                    const newCode = verificationCode.split('');
                    newCode[index] = e.target.value;
                    setVerificationCode(newCode.join(''));
                    if (e.target.value && e.target.nextSibling) {
                      e.target.nextSibling.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                      e.target.previousSibling.focus();
                    }
                  }}
                />
              ))}
            </div>
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
            <h3 className="font-medium text-gray-900">Save Your Backup Codes</h3>
            <p className="text-gray-600 text-sm">
              Store these backup codes in a safe place. You can use them to access 
              your account if you lose your authenticator device.
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
                onClick={() => {
                  navigator.clipboard.writeText(backupCodes.join('\n'));
                }}
                className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Codes</span>
              </button>
            </div>
          </div>

          <button
            onClick={complete2FA}
            className="w-full py-2.5 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
          >
            Enable Two-Factor Authentication
          </button>
        </motion.div>
      )}

      {/* Cancel Button */}
      <button
        onClick={onClose}
        className="mt-4 w-full py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
    </div>
  );
};

export default TwoFactorSetup;
