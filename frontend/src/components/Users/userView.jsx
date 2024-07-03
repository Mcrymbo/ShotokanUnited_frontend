import React from 'react';

const ViewUserModal = ({ isOpen, onClose, user }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">User Details</h2>
            <div className="mb-2">
              <strong>Username:</strong> {user.username}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>First Name:</strong> {user.first_name || 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Last Name:</strong> {user.last_name || 'N/A'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewUserModal;