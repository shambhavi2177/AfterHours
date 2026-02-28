import api from "../services/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import { register } from "../services/auth.js";

/**what does this page do 
 * collects user info 
 * sends it back to the database
 * handle loading and errors 
 * redirects to timeline page on entry 
 
so from this we know that we need: useState->states for the data 
handleSubmit->for the form 
navigate->because redirect 
api.post->because sending data to backend */

/***what states do we need:
 * 1. email
 * 2. password we also said that we will handle the loading and the errors
 * 3. loading
 * 4. error
 */

const Register = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();

  //hooks

  //handlers

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; //prevent multiple submits
    setLoading(true);
    setError("");

    try {
      const res = await register({email,password})
      console.log("this is backend response",res.data)
      setUser(res.data.user);
      toast.success("Account created successfully");
      navigate("/timeline");
    } catch (error) {
      const message = error.response?.data?.message || "Registration Failed";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Create Your Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail </label>
          <input
            id="email"
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating account" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
