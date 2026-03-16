import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEntry } from "../services/journal";
import toast from "react-hot-toast";

const WriteEntry = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      await createEntry({ content });
      toast.success("Entry created successfully!");
      navigate("/timeline");
    } catch (err) {
      toast.error("Failed to create entry");
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div>
  //     <h1>Write a New Journal Entry</h1>

  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>Content</label>
  //         <textarea
  //           placeholder="Write your thoughts..."
  //           value={content}
  //           onChange={(e) => setContent(e.target.value)}
  //           required
  //           disabled={loading}
  //           rows="6"
  //         />
  //       </div>

  //       <button type="submit" disabled={loading}>
  //         {loading ? "Saving..." : "Save Entry"}
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex justify-center">
      <div className="w-full max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold mb-8">
          Write a New Journal Entry
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a2136] p-6 rounded-xl border border-gray-700 space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-300">Content</label>

            <textarea
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              disabled={loading}
              rows="8"
              className="bg-[#0b0f1a] border border-gray-600 rounded-lg px-3 py-3 focus:outline-none focus:border-purple-400 resize-none"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate("/timeline")}
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg"
            >
              {loading ? "Saving..." : "Save Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteEntry;
