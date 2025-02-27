import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        navigate('/login'); 
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/auth/get_user_by_id', {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });

        setUser(response.data); 
      } catch (err) {
        setError(err.response?.data?.message || 'Не удалось загрузить данные профиля');
        console.error('Ошибка при загрузке профиля:', err);
        if (err.response?.status === 401) { 
          localStorage.removeItem('access_token');
          navigate('/login');
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ваш профиль
        </h1>
        <div className="space-y-4">
          <p><strong>Имя пользователя:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Дата рождения:</strong> {new Date(user.birth_date).toLocaleDateString('ru-RU')}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Создан:</strong> {new Date(user.created_at).toLocaleString('ru-RU')}</p>
          <p><strong>Обновлён:</strong> {new Date(user.updated_at).toLocaleString('ru-RU')}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;