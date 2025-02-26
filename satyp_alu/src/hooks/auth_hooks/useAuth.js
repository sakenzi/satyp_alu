import { useState } from "react";
import { registerUser } from "../../services/register_api/api";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const { token } = await registerUser(userData);
      localStorage.setItem("token", token);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { register, error, loading };
};
