import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Sad blinking warning icon */}
        <div className="mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
        </div>
        
        {/* Error-style heading */}
        <h1 className="text-3xl font-medium text-gray-800 mb-4">
          Website Under Maintenance
        </h1>
        
        {/* Apologetic message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          I apologize for the inconvenience. The is currently unavailable due to scheduled maintenance.
        </p>
        
       
          
      </div>
    </div>
  );
};

export default MaintenancePage;