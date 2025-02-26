import React, { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Поиск:', searchQuery);
      // Здесь можно добавить логику поиска (например, API-запрос)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Добро пожаловать!
        </h1>
        
        <form onSubmit={handleSearch} className="flex items-center space-x-4">
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

        <p className="mt-4 text-sm text-gray-600">
          Нет аккаунта?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Зарегистрируйтесь здесь
          </a>{' '}
          или{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            войдите
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;