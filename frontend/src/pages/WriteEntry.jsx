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

  return (
    <div>
      <h1>Write a New Journal Entry</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Content</label>
          <textarea
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={loading}
            rows="6"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Entry"}
        </button>
      </form>
    </div>
  );
};

export default WriteEntry;