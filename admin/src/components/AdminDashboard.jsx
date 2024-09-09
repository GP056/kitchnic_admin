import React from 'react';
import { Link } from 'react-router-dom';

// Import local images from the public folder
import manageRecipesIcon from 'admin/public/kitchnix logo.jpg';
import viewUsersIcon from 'admin/public/kitchnix logo.jpg';
import manageInventoryIcon from 'admin/public/kitchnix logo.jpg';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 my-8">Admin Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Manage Recipes */}
        <Link to="/manage-recipes" className="text-center">
          <div className="w-40 h-40 bg-white shadow rounded-lg flex flex-col items-center justify-center">
            <img src={manageRecipesIcon} alt="Manage Recipes" className="w-16 h-16" />
            <span className="mt-2 text-lg font-medium">Manage Recipes</span>
          </div>
        </Link>
        
        {/* View Users */}
        <Link to="/view-users" className="text-center">
          <div className="w-40 h-40 bg-white shadow rounded-lg flex flex-col items-center justify-center">
            <img src={viewUsersIcon} alt="View Users" className="w-16 h-16" />
            <span className="mt-2 text-lg font-medium">View Users</span>
          </div>
        </Link>
        
        {/* Manage Inventory */}
        <Link to="/manage-inventory" className="text-center">
          <div className="w-40 h-40 bg-white shadow rounded-lg flex flex-col items-center justify-center">
            <img src={manageInventoryIcon} alt="Manage Inventory" className="w-16 h-16" />
            <span className="mt-2 text-lg font-medium">Manage Inventory</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
