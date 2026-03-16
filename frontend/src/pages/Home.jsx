import { BookOpen, Heart, Lock } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-xl font-semibold">AfterHours</h1>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg bg-white text-black"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600"
          >
            Register
          </button>
        </div>

      </nav>


      {/* HERO */}

      <div className="text-center mt-24 px-6">

        <h1 className="text-5xl font-bold mb-6">
          AfterHours — Reflect on your day
        </h1>

        <p className="text-gray-400 mb-8">
          A quiet place to write, think and remember.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="px-6 py-3 bg-purple-500 rounded-xl hover:bg-purple-600"
        >
          Get Started
        </button>

      </div>


      {/* FEATURES */}

      <div className="grid md:grid-cols-3 gap-8 px-16 mt-24">

        <div className="bg-[#1a2136] p-6 rounded-xl">
          <BookOpen className="mb-4 text-purple-400" size={32} />
          <h3 className="text-lg font-semibold">Daily Journaling</h3>
          <p className="text-gray-400 mt-2">
            Write your thoughts every evening.
          </p>
        </div>

        <div className="bg-[#1a2136] p-6 rounded-xl">
          <Heart className="mb-4 text-purple-400" size={32} />
          <h3 className="text-lg font-semibold">Mood Tracking</h3>
          <p className="text-gray-400 mt-2">
            Track how you feel day by day.
          </p>
        </div>

        <div className="bg-[#1a2136] p-6 rounded-xl">
          <Lock className="mb-4 text-purple-400" size={32} />
          <h3 className="text-lg font-semibold">Private Reflections</h3>
          <p className="text-gray-400 mt-2">
            Your thoughts stay private and secure.
          </p>
        </div>

      </div>

    </div>
  )
}