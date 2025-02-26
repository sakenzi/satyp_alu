// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold">Добро пожаловать!</h1>
        <p className="mt-4">
          Нет аккаунта?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Зарегистрируйтесь здесь
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;