import React, { useState } from 'react';


const DeleteProjectModal = ({ project, isOpen, onClose, onDeleteProject }) => {
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleConfirmDelete = () => {
    onDeleteProject(projectToDelete);
    setProjectToDelete(null);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 w-full max-w-md rounded">
        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this project?</p>
        <div className="flex justify-between items-center">
          <span style={{ fontSize: '2rem' }}>🤔</span> 
          <div className="flex justify-end">
            <button onClick={handleConfirmDelete} className="bg-red-500 text-white py-2 px-4 rounded mr-2">Yes</button>
            <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProjectModal;
