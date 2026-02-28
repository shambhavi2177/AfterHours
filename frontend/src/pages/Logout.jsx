import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const logout = async () => {
      await api.post("/auth/logout");//this should be in services/auth
      setUser(null);
      navigate("/login");
    };

    logout();
  }, []);

  return (
    <>
    <h3> You are now logged out!</h3></>
  );
}
