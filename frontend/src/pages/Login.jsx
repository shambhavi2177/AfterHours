import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // ✅ THIS IS THE MOMENT
      setUser(res.data.user);
      navigate("/timeline");

    } catch (err) {
      console.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* inputs */}
      {/**This is still incomplete */}
      <input type="text" placeholder="Email"></input>
      <label>Enter your Email</label>
    </form>
  );
}
