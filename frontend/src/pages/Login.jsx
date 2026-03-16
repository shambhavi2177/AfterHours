import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast"; 
import { login } from "../services/auth.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🚫 prevent double submit

    setError("");
    setLoading(true);

    try {
      const res = await login({email,password})
      toast.success("You are now logged in!")
      console.log("login success:" + res.data)

      // Save user in global auth state
      setUser(res.data.user);

      // Redirect after login
      navigate("/timeline");
    } catch (err) {
      // Prefer backend error message
      const message =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setError(message);
      toast.error(message)
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div className="login-container">
  //     <h2>Login</h2>

  //     <form onSubmit={handleSubmit}>
  //       {/* Email */}
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input
  //           id="email"
  //           type="email"
  //           placeholder="Enter your email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //           disabled={loading}
  //         />
  //       </div>

  //       {/* Password */}
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <input
  //           id="password"
  //           type="password"
  //           placeholder="Enter your password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //           disabled={loading}
  //         />
  //       </div>


  //       <button type="submit" disabled={loading}>
  //         {loading ? "Logging in..." : "Login"}
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] text-white">

    <div className="w-[380px] bg-[#1a2136] p-8 rounded-xl shadow-lg">

      <h2 className="text-2xl font-semibold text-center mb-6">
        Login to AfterHours
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
            required
            disabled={loading}
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            className="bg-[#0b0f1a] border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-500 hover:bg-purple-600 transition py-2 rounded-lg font-medium"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {/* Register redirect */}
      <p className="text-sm text-gray-400 text-center mt-6">
        Don't have an account?{" "}
        <span
          className="text-purple-400 cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>

    </div>

  </div>
);
}
