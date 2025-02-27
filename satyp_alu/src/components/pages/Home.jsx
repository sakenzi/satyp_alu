import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token'); 
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Поиск:', searchQuery);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token'); 
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <form onSubmit={handleSearch} className="flex items-center space-x-2 w-1/2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Введите запрос для поиска..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Поиск
          </button>
        </form>

        <div className="flex space-x-4">
          <Link
            to="/profile"
            className="text-blue-600 hover:underline text-sm font-medium flex items-center"
          >
            <FiUser className="mr-1 h-4 w-4" /> Профиль
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline text-sm font-medium flex items-center"
          >
            <FiLogOut className="mr-1 h-4 w-4" /> Выйти
          </button>
        </div>
      </header>

      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;