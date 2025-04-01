import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { 
  Facebook, Twitter, LinkedIn, Link as LinkIcon,
  Mail, WhatsApp, Copy, X
} from 'lucide-react';

const ShareModal = ({ isOpen, onClose, onShare, url, title }) => {
  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2] hover:bg-[#0C63D4]',
      onClick: () => onShare('facebook')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1DA1F2] hover:bg-[#0C85D0]',
      onClick: () => onShare('twitter')
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      color: 'bg-[#0A66C2] hover:bg-[#084E96]',
      onClick: () => onShare('linkedin')
    },
    {
      name: 'WhatsApp',
      icon: WhatsApp,
      color: 'bg-[#25D366] hover:bg-[#1FAD53]',
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`)
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You can add a toast notification here
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Share Article
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Share Options Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {shareOptions.map((option) => (
                    <motion.button
                      key={option.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={option.onClick}
                      className={`
                        flex flex-col items-center justify-center p-4 rounded-lg
                        text-white transition-colors duration-200 ${option.color}
                      `}
                    >
                      <option.icon className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">{option.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Copy Link Section */}
                <div className="mt-4">
                  <label 
                    htmlFor="share-url" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Article URL
                  </label>
                  <div className="flex items-center">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LinkIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="share-url"
                        value={url}
                        readOnly
                        className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-l-lg focus:ring-wine-500 focus:border-wine-500"
                      />
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-500"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* QR Code Option */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      // Implement QR code generation
                      // You can use a library like qrcode.react
                      console.log('Generate QR code');
                    }}
                    className="inline-flex items-center text-sm text-wine-600 hover:text-wine-700"
                  >
                    <span>Generate QR Code</span>
                  </button>
                </div>

                {/* Share Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    This article has been shared {Math.floor(Math.random() * 100)} times
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ShareModal;
