const Modal = ({ isOpen, onCancel, onConfirm, message }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <p className="text-lg text-center mb-4">{message}</p>
              <div className="flex justify-center space-x-10">
                <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                  Confirm
                </button>
                <button onClick={onCancel} className="bg-neutral-400 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;