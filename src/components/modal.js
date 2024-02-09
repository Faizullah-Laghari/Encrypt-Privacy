// SimpleModal.js
import React from 'react';

const SimpleModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#5D5E60] p-5 rounded-lg text-center ">
        <p className='text-white text-2xl'>{message}</p>
        <button onClick={onClose} className="mt-2 px-5 py-2 progress text-white rounded">Try again</button>
      </div>
    </div>
  );
};

export default SimpleModal;
