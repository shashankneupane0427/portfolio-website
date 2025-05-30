import React from 'react';
import { AlertTriangle,  Github, Linkedin } from 'lucide-react';

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
        <p className="text-gray-600 mb-8 leading-relaxed">
          I apologize for the inconvenience. The Website is currently unavailable due to scheduled maintenance.
        </p>
        
        {/* Contact Footer */}
        <div className="border-t pt-6 mt-8">
          <p className="text-sm text-gray-500 mb-4">Contact Information:</p>
          <div className="flex justify-center space-x-6">
           
            <a 
              href="https://linkedin.com/in/shashankneupane0427" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/shashankneupane0427" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;