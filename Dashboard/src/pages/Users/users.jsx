import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModifyUserModal from './modify-user'; // Make sure the path is correct
import DeleteUserModal from './delete-user'; // Import the DeleteUserModal component

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      profilePicture: 'url_to_profile_pic',
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      adresse: '123 Main St, City',
      telephone: '123-456-7890',
      status: 'Active'
    },
    // Add more users as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId);
    setIsDeleteConfirmationOpen(true);
  };

  const confirmDeleteUser = () => {
    setUsers(users.filter(user => user.id !== userToDelete));
    setIsDeleteConfirmationOpen(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setIsModalOpen(false);
  };

  const openModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Profile</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Telephone</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <img src={user.profilePicture} alt="Profile" className="h-10 w-10 rounded-full" />
                </td>
                <td className="py-3 px-6 text-left">{user.nom} {user.prenom}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.adresse}</td>
                <td className="py-3 px-6 text-left">{user.telephone}</td>
                <td className="py-3 px-6 text-left">{user.status}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => openModal(user)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <span className="mx-2">|</span> {/* Add a separator */}
                    <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDeleteUser(user.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModifyUserModal user={currentUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpdateUser={handleUpdateUser} />
      <DeleteUserModal isOpen={isDeleteConfirmationOpen} onClose={() => setIsDeleteConfirmationOpen(false)} onDeleteUser={confirmDeleteUser} /> {/* Add the DeleteUserModal component */}
    </div>
  );
};

export default Users;
