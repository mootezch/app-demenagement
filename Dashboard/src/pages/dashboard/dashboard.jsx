import React from 'react';
import TicketStats from '../../components/TicketStats';
import TicketTable from '../../components/TicketTable';
import Data from '../../components/stats/data'
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        <Data />
        <div className="flex flex-col flex-1 p-4">
          <h2 className="text-lg font-semibold mb-4">Ticket Overview</h2>
          <TicketStats />
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Recent Tickets</h2>
            <TicketTable />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
