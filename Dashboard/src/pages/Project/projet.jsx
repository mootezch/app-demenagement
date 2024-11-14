import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModifyProjectModal from './update-projet'; // Make sure the path is correct
import DeleteProjectModal from './delete-projet'; // Make sure the path is correct

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project A',
      createdAt: '2024-05-15',
      deadline: '2024-07-30',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'In Progress',
      client: 'Client X'
    },
    // Add more projects as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleDeleteProject = (projectId) => {
    setProjectToDelete(projectId);
    setIsDeleteConfirmationOpen(true);
  };

  const confirmDeleteProject = () => {
    setProjects(projects.filter(project => project.id !== projectToDelete));
    setIsDeleteConfirmationOpen(false);
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
    setIsModalOpen(false);
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Created At</th>
              <th className="py-3 px-6 text-left">Deadline</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Client</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {projects.map(project => (
              <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{project.name}</td>
                <td className="py-3 px-6 text-left">{project.createdAt}</td>
                <td className="py-3 px-6 text-left">{project.deadline}</td>
                <td className="py-3 px-6 text-left">{project.description}</td>
                <td className="py-3 px-6 text-left">{project.status}</td>
                <td className="py-3 px-6 text-left">{project.client}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => openModal(project)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <span className="mx-2">|</span>
                    <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDeleteProject(project.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModifyProjectModal project={currentProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpdateProject={handleUpdateProject} />
      <DeleteProjectModal project={currentProject} isOpen={isDeleteConfirmationOpen} onClose={() => setIsDeleteConfirmationOpen(false)} onDeleteProject={confirmDeleteProject} />
    </div>
  );
};

export default Projects;
