import React from 'react';

// Define the props interface for the Header component
interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

// Functional component for the Header
const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) => {
  // Get the base URL from environment variables (used for image path resolution)
  const base = import.meta.env.BASE_URL;

  return (
    // Header container with styling
    <header className="bg-orange-500 py-3 shadow-white my-12 rounded">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center mr-20">
          <img src={`${base}img/Logo.svg`} alt="Logo" className="pr-5" />
          <h2 className="text-white font-bold text-2xl ml-2">Movies</h2>
        </div>

         {/* Search form */}
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search the movie"
            className="px-5 py-3 border rounded text-gray-700 w-full outline-none bg-white"
          />
        </form>
      </div>
    </header>
  );
};

// Export the Header component for use in other parts of the app
export default Header;
