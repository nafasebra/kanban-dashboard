import React from 'react';
import Sidebar from './layout/sidebar';
import Navbar from './layout/navbar';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar - Hidden on mobile */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Content Area - Responsive padding */}
        <main className="flex-1 overflow-auto p-4 md:p-8 scrollbar-thin">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardWrapper;
