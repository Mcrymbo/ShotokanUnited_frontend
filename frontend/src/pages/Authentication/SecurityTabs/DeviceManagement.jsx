import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Smartphone, Globe, Clock,
  MapPin, AlertTriangle, Shield, X
} from 'lucide-react';
import auth from '../../../utils/auth';

const DeviceManagement = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await auth.get('/api/auth/devices/');
      setDevices(response.data);
    } catch (error) {
      setError('Failed to load devices');
    } finally {
      setIsLoading(false);
    }
  };

  const revokeDevice = async (deviceId) => {
    try {
      await auth.delete(`/api/auth/devices/${deviceId}/`);
      setDevices(devices.filter(device => device.id !== deviceId));
    } catch (error) {
      setError('Failed to revoke device access');
    }
  };

  const getDeviceIcon = (deviceType) => {
    switch (deviceType) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'tablet':
        return <Smartphone className="w-5 h-5" />;
      case 'desktop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-wine-700"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Device Management
        </h3>
        <button
          onClick={fetchDevices}
          className="text-sm text-wine-700 hover:text-wine-800"
        >
          Refresh
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {devices.map((device) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {getDeviceIcon(device.type)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {device.browser} on {device.os}
                  </h4>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Last active: {new Date(device.last_active).toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {device.location || 'Unknown location'}
                    </div>
                  </div>
                </div>
              </div>

              {device.is_current ? (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Current
                </span>
              ) : (
                <button
                  onClick={() => revokeDevice(device.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  title="Revoke access"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeviceManagement;
