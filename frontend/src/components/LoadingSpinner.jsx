import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-wine-200 border-t-wine-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;