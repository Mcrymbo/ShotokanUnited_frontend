import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, Trash2, 
  Lock, CheckCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../utils/auth';

const AccountDeletion = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [password, setPassword] = useState('');
  const [reason, setReason] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    setError('');

    try {
      await auth.post('/api/auth/account/delete/', {
        password,
        reason
      });
      
      // Clear auth tokens and redirect to home
      localStorage.removeItem('token');
      navigate('/', { 
        state: { 
          message: 'Your account has been successfully deleted. We\'re sorry to see you go.' 
        } 
      });
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to delete account');
    } finally {
      setIsDeleting(false);
    }
  };

  const reasons = [
    "I no longer use this service",
    "I'm concerned about my data privacy",
    "I'm creating a new account",
    "I found a better alternative",
    "Other"
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Trash2 className="w-6 h-6 text-red-600" />
        <h3 className="text-lg font-medium text-gray-900">
          Delete Account
        </h3>
      </div>

      {!showConfirmation ? (
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="flex items-center text-red-800 font-medium mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Warning: This action cannot be undone
            </h4>
            <p className="text-red-700 text-sm">
              Deleting your account will permanently remove all your data, including:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-red-700">
              <li>• Profile information</li>
              <li>• Training history and achievements</li>
              <li>• Event registrations</li>
              <li>• Membership records</li>
            </ul>
          </div>

          <button
            onClick={() => setShowConfirmation(true)}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Continue to Account Deletion
          </button>
        </div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleDelete}
          className="space-y-6"
        >
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Leaving
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select a reason</option>
              {reasons.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setShowConfirmation(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isDeleting || !password || !reason}
              className={`
                flex-1 px-4 py-2 rounded-lg text-white
                transition duration-300 ease-in-out
                ${isDeleting || !password || !reason
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
                }
              `}
            >
              {isDeleting ? 'Deleting...' : 'Delete Account'}
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default AccountDeletion;
