import React, { useState } from 'react';

const ModifyUserModal = ({ user, isOpen, onClose, onUpdateUser }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 w-full max-w-lg rounded">
        <h2 className="text-lg font-semibold">Modify User</h2>
        <form onSubmit={handleSubmit}>
          <label className="block">
            Name
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Address
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full border-2 p-2"
            />
          </label>
          <label className="block">
            Telephone
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border-2 p-2"
              pattern="\d*"
              title="Only numeric values are allowed"
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
              <option value="en cours">En cours</option>
              <option value="activé">Activé</option>
              <option value="désactivé">Désactivé</option>
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

export default ModifyUserModal;
