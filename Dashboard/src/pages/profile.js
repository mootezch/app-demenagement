import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Profile content goes here */}
        <p className="text-gray-800">Name: John Doe</p>
        <p className="text-gray-800">Email: john.doe@example.com</p>
        {/* Add more profile information as needed */}
      </div>
    </div>
  );
};

export default Profile;
