import React from 'react';

const TicketStats = () => {
  return (
    <div className="flex justify-between bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Total Tickets</h2>
        <p className="text-4xl font-bold text-blue-600">50</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Open Tickets</h2>
        <p className="text-4xl font-bold text-green-600">20</p>
      </div>
    </div>
  );
};

export default TicketStats;
    