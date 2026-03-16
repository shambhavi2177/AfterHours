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

  // return (
  //   <div className="register-container">
  //     <h2>Create Your Account</h2>

  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="email">E-mail </label>
  //         <input
  //           id="email"
  //           type="email"
  //           placeholder="your email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           disabled={loading}
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="password">Password </label>
  //         <input
  //           id="password"
  //           type="password"
  //           placeholder="your password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           disabled={loading}
  //           required
  //         />
  //       </div>

  //       <button type="submit" disabled={loading}>
  //         {loading ? "Creating account" : "Register"}
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] text-white">

    <div className="w-[380px] bg-[#1a2136] p-8 rounded-xl shadow-lg">

      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Your Account
      </h2>

      {error && (
        <p className="text-red-400 text-sm text-center mb-4">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm text-gray-300">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            className="bg-[#0b0f1a] border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
            className="bg-[#0b0f1a] border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-500 hover:bg-purple-600 transition py-2 rounded-lg font-medium"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

      </form>

      {/* Login Redirect */}
      <p className="text-sm text-gray-400 text-center mt-6">
        Already have an account?{" "}
        <span
          className="text-purple-400 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>

    </div>

  </div>
);
};

export default Register;
