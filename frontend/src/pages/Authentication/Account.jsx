import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Camera,
  Lock, Eye, EyeOff, AlertCircle, CheckCircle,
  Shield, Bell, Key, LogOut
} from 'lucide-react';
import { useUser } from '../../hooks';
import auth from '../../utils/auth';
import DefaultLayout from '../../layout/DefaultLayout';

const Account = () => {
  const { user, refetchUser } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    watch
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user, reset]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const onUpdateProfile = async (data) => {
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (data[key]) formData.append(key, data[key]);
      });
      if (avatar) {
        formData.append('avatar', avatar);
      }

      await auth.patch('/api/auth/profile/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccess('Profile updated successfully');
      await refetchUser();
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChangePassword = async (data) => {
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      await auth.post('/api/auth/password/change/', {
        old_password: data.currentPassword,
        new_password: data.newPassword
      });

      setSuccess('Password changed successfully');
      reset({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to change password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'sessions', label: 'Sessions', icon: Key }
  ];

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-wine-700 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Account Settings</h1>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center px-6 py-4 text-sm font-medium
                      transition-colors duration-200
                      ${activeTab === tab.id
                        ? 'border-b-2 border-wine-700 text-wine-700'
                        : 'text-gray-500 hover:text-wine-700'
                      }
                    `}
                  >
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700">{success}</p>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{error}</p>
                </motion.div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onUpdateProfile)}
                  className="space-y-6"
                >
                  {/* Avatar */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <img
                        src={avatarPreview || user?.avatar || '/default-avatar.png'}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <label
                        htmlFor="avatar"
                        className="absolute bottom-0 right-0 bg-wine-700 text-white p-2 rounded-full cursor-pointer hover:bg-wine-800 transition-colors"
                      >
                        <Camera className="w-4 h-4" />
                      </label>
                      <input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {user?.first_name} {user?.last_name}
                      </h2>
                      <p className="text-gray-500">{user?.email}</p>
                    </div>
                  </div>

                  {/* Profile Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          {...register('username')}
                          className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          {...register('email')}
                          className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                      </div>
                    </div>

                     {/* Security Tab */}
                    {activeTab === 'security' && <SecurityTab />}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register('first_name')}
                        className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register('last_name')}
                        className="block w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          {...register('address')}
                          className="block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        px-6 py-2.5 rounded-lg text-white
                        transition duration-300 ease-in-out
                        ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-wine-700 hover:bg-wine-800'
                        }
                      `}
                    >
                      {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </motion.form>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <form onSubmit={handleSubmit(onChangePassword)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          {...register('currentPassword', {
                            required: 'Current password is required'
                          })}
                          className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          {...register('newPassword', {
                            required: 'New password is required',
                            minLength: {
                              value: 8,
                              message: 'Password must be at least 8 characters'
                            }
                          })}
                          className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                          px-6 py-2.5 rounded-lg text-white
                          transition duration-300 ease-in-out
                          ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-wine-700 hover:bg-wine-800'
                          }
                        `}
                      >
                        {isSubmitting ? 'Changing...' : 'Change Password'}
                      </button>
                    </div>
                  </form>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <button
                      type="button"
                      className="px-6 py-2.5 border border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
                    >
                      Enable 2FA
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        'News and updates',
                        'Event reminders',
                        'Training schedule changes',
                        'Grading notifications',
                        'Account security alerts'
                      ].map((item, index) => (
                        <label key={index} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-wine-700 rounded focus:ring-wine-500"
                          />
                          <span className="text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-6 py-2.5 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Sessions Tab */}
              {activeTab === 'sessions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Active Sessions
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Shield className="w-5 h-5 text-green-500" />
                            <div>
                              <p className="font-medium text-gray-900">Current Session</p>
                              <p className="text-sm text-gray-500">Last active: Just now</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-2.5 border border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
                    >
                      Revoke All Sessions
                    </button>
                    <button
                      type="button"
                      className="px-6 py-2.5 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Account;