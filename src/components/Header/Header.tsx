import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">✦</span>
          <h1 className="text-lg font-medium">Letter Writing Assistant</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;