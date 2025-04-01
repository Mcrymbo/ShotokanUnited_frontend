import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Key, Mail, AlertTriangle, 
  CheckCircle, Copy, Download,
  RefreshCw, Lock
} from 'lucide-react';
import auth from '../../../utils/auth';

const RecoveryOptions = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [backupCodes, setBackupCodes] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const generateNewBackupCodes = async () => {
    setIsGenerating(true);
    setError('');
    setSuccess('');

    try {
      const response = await auth.post('/api/auth/recovery/generate-codes/');
      setBackupCodes(response.data.backup_codes);
      setSuccess('New backup codes generated successfully');
    } catch (error) {
      setError('Failed to generate new backup codes');
    } finally {
      setIsGenerating(false);
    }
  };

  const updateRecoveryEmail = async (e) => {
    e.preventDefault();
    setIsUpdatingEmail(true);
    setError('');
    setSuccess('');

    try {
      await auth.post('/api/auth/recovery/update-email/', {
        recovery_email: recoveryEmail
      });
      setSuccess('Recovery email updated successfully');
    } catch (error) {
      setError('Failed to update recovery email');
    } finally {
      setIsUpdatingEmail(false);
    }
  };

  const downloadBackupCodes = () => {
    const content = `SHOTOKAN UNITED - BACKUP CODES\n\nKeep these codes safe and secure. Each code can only be used once.\n\n${backupCodes.join('\n')}\n\nGenerated: ${new Date().toLocaleString()}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shotokan-backup-codes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700">{success}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
        >
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">{error}</p>
        </motion.div>
      )}

      {/* Recovery Email Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Mail className="w-6 h-6 text-wine-700" />
          <h3 className="text-lg font-medium text-gray-900">
            Recovery Email
          </h3>
        </div>

        <form onSubmit={updateRecoveryEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Backup Email Address
            </label>
            <input
              type="email"
              value={recoveryEmail}
              onChange={(e) => setRecoveryEmail(e.target.value)}
              placeholder="Enter recovery email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
            />
            <p className="mt-2 text-sm text-gray-500">
              This email will be used to recover your account if you lose access
            </p>
          </div>

          <button
            type="submit"
            disabled={isUpdatingEmail}
            className={`
              px-4 py-2 rounded-lg text-white
              transition duration-300 ease-in-out
              ${isUpdatingEmail
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-wine-700 hover:bg-wine-800'
              }
            `}
          >
            {isUpdatingEmail ? 'Updating...' : 'Update Recovery Email'}
          </button>
        </form>
      </div>

      {/* Backup Codes Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Key className="w-6 h-6 text-wine-700" />
          <h3 className="text-lg font-medium text-gray-900">
            Backup Codes
          </h3>
        </div>

        {backupCodes.length > 0 ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                {backupCodes.map((code, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between font-mono text-sm bg-white px-3 py-1.5 rounded border border-gray-200"
                  >
                    <span>{code}</span>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(backupCodes.join('\n'));
                  setSuccess('Backup codes copied to clipboard');
                }}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Codes</span>
              </button>

              <button
                onClick={downloadBackupCodes}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Codes</span>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mb-4">
            No backup codes generated yet. Generate new codes to get started.
          </p>
        )}

        <button
          onClick={generateNewBackupCodes}
          disabled={isGenerating}
          className={`
            mt-4 flex items-center space-x-2 px-4 py-2 rounded-lg text-white
            transition duration-300 ease-in-out
            ${isGenerating
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-wine-700 hover:bg-wine-800'
            }
          `}
        >
          <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
          <span>{isGenerating ? 'Generating...' : 'Generate New Codes'}</span>
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Keep these backup codes safe. Each code can only be used once for account recovery.
        </p>
      </div>
    </div>
  );
};

export default RecoveryOptions;
