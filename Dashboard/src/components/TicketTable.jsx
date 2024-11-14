import React from 'react';

const TicketTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Ticket ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Subject</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-700">1</td>
            <td className="px-4 py-2 text-sm text-gray-700">Issue with login</td>
            <td className="px-4 py-2 text-sm text-green-600 font-semibold">Open</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
