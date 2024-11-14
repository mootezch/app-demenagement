import React, { useState } from 'react';

const UpdateProjectModal = ({ project, isOpen, onClose, onUpdateProject }) => {
  const [formData, setFormData] = useState({ ...project });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProject(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 w-full max-w-lg rounded">
        <h2 className="text-lg font-semibold">Update Project</h2>
        <form onSubmit={handleSubmit}>
          <label className="block">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Created At
            <input
              type="text"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Deadline
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border-2 p-2 mt-2"
            >
              <option value="In Progress">In Progress</option>
              <option value="Open">Open</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <label className="block">
            Client
            <select
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="w-full border-2 p-2 mt-2"
            >
              <option value="Client A">Client A</option>
              <option value="Client B">Client B</option>
              <option value="Client C">Client C</option>
            </select>
          </label>
          <div className="mt-4 flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectModal;
