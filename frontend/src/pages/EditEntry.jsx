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

  return (
    <div>
      <h1>Edit Journal Entry</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
          disabled={saving}
        />

        <button type="submit" disabled={saving}>
          {saving ? "Updating..." : "Update Entry"}
        </button>
      </form>
    </div>
  );
};

export default EditEntry;