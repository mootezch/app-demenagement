import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModifyTicketModal from './ModifyTicketModal';
import DeleteTicketModal from './DeleteTicketModal';

function createData(projectName, clientName, description, date, status, ticketType) {
  return { projectName, clientName, description, date, status, ticketType };
}

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

const Ticket = () => {
  const [tickets, setTickets] = useState([
    createData("Project A", "Client X", "Description for Ticket 1", "2 March 2022", "Approved", "Type A"),
    createData("Project B", "Client Y", "Description for Ticket 2", "2 March 2022", "Pending", "Type B"),
    createData("Project C", "Client Z", "Description for Ticket 3", "2 March 2022", "Approved", "Type C"),
    createData("Project D", "Client W", "Description for Ticket 4", "2 March 2022", "Delivered", "Type D"),
  ]);

  const [currentTicket, setCurrentTicket] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditTicket = (ticket) => {
    setCurrentTicket(ticket);
    setIsEditModalOpen(true);
  };

  const handleDeleteTicket = (ticket) => {
    setCurrentTicket(ticket);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateTicket = (updatedTicket) => {
    setTickets(tickets.map(t => t.projectName === updatedTicket.projectName ? updatedTicket : t));
    setIsEditModalOpen(false);
  };

  const handleDeleteConfirmation = () => {
    setTickets(tickets.filter(t => t.projectName !== currentTicket.projectName));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="Table">
      <h3 className="text-lg font-bold mb-4">Recent Tickets</h3>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Type</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {tickets.map((ticket) => (
              <tr key={ticket.projectName} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{ticket.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.clientName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" style={makeStyle(ticket.status)}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.ticketType}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEditTicket(ticket)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <span className="mx-2">|</span> {/* Add a separator */}
                    <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDeleteTicket(ticket)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModifyTicketModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} ticket={currentTicket} onUpdateTicket={handleUpdateTicket} />
      <DeleteTicketModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} ticket={currentTicket} onDeleteConfirmation={handleDeleteConfirmation} />
    </div>
  );
};

export default Ticket;
