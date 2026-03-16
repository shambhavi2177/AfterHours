import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleEntry, updateEntry } from "../services/journal";
import toast from "react-hot-toast";

const EditEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const data = await getSingleEntry(id);
        setContent(data.content);
      } catch (err) {
        toast.error("Failed to load entry");
        navigate("/timeline");
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;

    setSaving(true);

    try {
      await updateEntry(id, { content });
      toast.success("Entry updated!");
      navigate("/timeline");
    } catch (err) {
      toast.error("Failed to update entry");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <h2>Loading entry...</h2>;

  // return (
  //   <div>
  //     <h1>Edit Journal Entry</h1>

  //     <form onSubmit={handleSubmit}>
  //       <textarea
  //         value={content}
  //         onChange={(e) => setContent(e.target.value)}
  //         rows="6"
  //         required
  //         disabled={saving}
  //       />

  //       <button type="submit" disabled={saving}>
  //         {saving ? "Updating..." : "Update Entry"}
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex justify-center">
      <div className="w-full max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold mb-8">Edit Journal Entry</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a2136] p-6 rounded-xl border border-gray-700 space-y-6"
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="8"
            required
            disabled={saving}
            className="w-full bg-[#0b0f1a] border border-gray-600 rounded-lg px-3 py-3 focus:outline-none focus:border-purple-400 resize-none"
          />

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
              disabled={saving}
              className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-lg"
            >
              {saving ? "Updating..." : "Update Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEntry;
