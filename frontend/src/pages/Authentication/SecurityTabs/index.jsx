import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Smartphone, History, 
  Bell, Key, LogOut, CheckCircle, AlertTriangle, Lock, Trash2, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks';
import auth from '../../../utils/auth';
import TwoFactorSetup from './TwoFactorSetup';
import RecoveryOptions from './RecoveryOptions';
import AccountDeletion from './AccountDeletion';
import SecurityLog from './SecurityLog';

const SecurityTab = () => {
  const [activeSection, setActiveSection] = useState('security');
  const { user, refetchUser } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [show2FASetup, setShow2FASetup] = useState(false);

  const handleLogoutAllDevices = async () => {
    setIsLoading(true);
    setError('');
    try {
      await auth.post('/api/auth/logout-all/');
      // Clear local storage and redirect to login
      localStorage.removeItem('token');
      navigate('/auth/login');
    } catch (error) {
      setError('Failed to logout from all devices');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      await auth.post('/api/auth/password/change/', {
        old_password: data.currentPassword,
        new_password: data.newPassword
      });
      // Show success message
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to change password');
    } finally {
      setIsLoading(false);
    }
  };

  const TwoFactorSection = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-wine-700" />
        <h3 className="text-lg font-medium text-gray-900">
          Two-Factor Authentication
        </h3>
      </div>

      {user?.has_2fa ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-800 font-medium">
                Two-factor authentication is enabled
              </p>
              <p className="text-green-600 text-sm mt-1">
                Your account is protected with an additional layer of security.
              </p>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => setShow2FASetup(true)}
                  className="text-sm text-wine-700 hover:text-wine-800"
                >
                  Reconfigure 2FA
                </button>
                <button
                  onClick={async () => {
                    try {
                      await auth.post('/api/auth/2fa/disable/');
                      await refetchUser();
                    } catch (error) {
                      setError('Failed to disable 2FA');
                    }
                  }}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Disable 2FA
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-800 font-medium">
                Two-factor authentication is not enabled
              </p>
              <p className="text-yellow-600 text-sm mt-1">
                Add an extra layer of security to your account by enabling 2FA.
              </p>
              <button
                onClick={() => setShow2FASetup(true)}
                className="mt-4 px-4 py-2 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const sections = [
    { id: 'password', label: 'Password', icon: Lock },
    { id: '2fa', label: '2FA Security', icon: Shield },
    { id: 'recovery', label: 'Recovery', icon: Key },
    { id: 'logs', label: 'Security Log', icon: Clock },
    { id: 'deletion', label: 'Delete Account', icon: Trash2 }
  ];

  return (
    <div className="space-y-8">
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-4 border-b border-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 -mb-px
              ${activeSection === section.id
                ? 'border-b-2 border-wine-700 text-wine-700'
                : 'text-gray-500 hover:text-wine-700'
              }
            `}
          >
            <section.icon className="w-5 h-5" />
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Section Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {activeSection === 'password' && <PasswordSection />}
        {activeSection === '2fa' && <TwoFactorSection />}
        {activeSection === 'recovery' && <RecoveryOptions />}
        {activeSection === 'logs' && <SecurityLog />}
        {activeSection === 'deletion' && <AccountDeletion />}
      </motion.div>

      {/* Security Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-wine-700" />
          <h3 className="text-lg font-medium text-gray-900">
            Security Actions
          </h3>
        </div>

        <div className="space-y-4">
          {/* Logout from all devices */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">
                Logout from all devices
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                This will terminate your active token on all devices
              </p>
            </div>
            <button
              onClick={handleLogoutAllDevices}
              disabled={isLoading}
              className={`
                px-4 py-2 rounded-lg text-white
                transition duration-300 ease-in-out
                ${isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
                }
              `}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">
                Security Notifications
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Receive email alerts for important security events
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={user?.security_notifications_enabled}
                onChange={async (e) => {
                  try {
                    await auth.post('/api/auth/preferences/', {
                      security_notifications_enabled: e.target.checked
                    });
                    await refetchUser();
                  } catch (error) {
                    setError('Failed to update notification preferences');
                  }
                }}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-wine-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wine-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-6">
          <History className="w-6 h-6 text-wine-700" />
          <h3 className="text-lg font-medium text-gray-900">
            Recent Activity
          </h3>
        </div>

        <div className="space-y-4">
          {user?.recent_activity?.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                {activity.type === 'login' ? (
                  <LogIn className="w-4 h-4 text-gray-600" />
                ) : (
                  <Shield className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <div>
                <p className="text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          {(!user?.recent_activity || user.recent_activity.length === 0) && (
            <p className="text-center text-gray-500 py-4">
              No recent activity to display
            </p>
          )}
        </div>
      </div>

      {/* 2FA Setup Modal */}
      {show2FASetup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <TwoFactorSetup
            onClose={() => setShow2FASetup(false)}
            onSuccess={async () => {
              await refetchUser();
              setShow2FASetup(false);
            }}
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default SecurityTab;
