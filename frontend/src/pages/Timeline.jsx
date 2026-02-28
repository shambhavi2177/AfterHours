import { useEffect, useState } from "react";
import { getAllEntries } from "../services/journal";
import { Link } from "react-router-dom";
import { deleteEntry } from "../services/journal";


const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getAllEntries();
        console.log("Timeline data:", data);
        setEntries(data); // since backend returns array directly
      } catch (err) {
        setError("Failed to fetch entries");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this post?");
  
  if (!confirmDelete) return;

  try {
    await deleteEntry(id)
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry._id !== id)
    );
  } catch (err) {
    console.error(err);
  }
};

  if (loading) return <h2>Loading entries...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Your Journal Timeline</h1>

      {entries.length === 0 ? (
        <p>No entries yet. Start writing one!</p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>{entry.content}</p>
            <small>
              {new Date(entry.createdAt).toLocaleString()}
            </small>
            <Link to={`/journal/${entry._id}`}>EDIT</Link>
            <button
              onClick={() => handleDelete(entry._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;