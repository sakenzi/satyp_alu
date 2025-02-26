import RegisterForm from "../../components/RegisterForm";
import { useAuth } from "../../hooks/auth_hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, error, loading } = useAuth();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    const result = await register(userData);
    if (result) {
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Регистрация</h2>
        {success ? (
          <p className="text-green-500">Регистрация успешна! Перенаправление...</p>
        ) : (
          <>
            <RegisterForm onRegister={handleRegister} />
            {loading && <p className="text-blue-500">Загрузка...</p>}
            {error && <p className="text-red-500">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
