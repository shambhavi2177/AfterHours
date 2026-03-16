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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!confirmDelete) return;

    try {
      await deleteEntry(id);
      setEntries((prevEntries) =>
        prevEntries.filter((entry) => entry._id !== id),
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <h2>Loading entries...</h2>;
  if (error) return <h2>{error}</h2>;

  // return (
  //   <div>
  //     <h1>Your Journal Timeline</h1>

  //     {entries.length === 0 ? (
  //       <p>No entries yet. Start writing one!</p>
  //     ) : (
  //       entries.map((entry) => (
  //         <div
  //           key={entry._id}
  //           style={{
  //             border: "1px solid #ccc",
  //             margin: "10px",
  //             padding: "10px",
  //           }}
  //         >
  //           <p>{entry.content}</p>
  //           <small>
  //             {new Date(entry.createdAt).toLocaleString()}
  //           </small>
  //           <Link to={`/journal/${entry._id}`}>EDIT</Link>
  //           <button
  //             onClick={() => handleDelete(entry._id)}
  //             className="text-red-500"
  //           >
  //             Delete
  //           </button>
  //         </div>
  //       ))
  //     )}
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex justify-center">
      <div className="w-full max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">Your Journal Timeline</h1>

          <Link
            to="/journal/new"
            className="bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-lg"
          >
            + New Entry
          </Link>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-400">Loading entries...</p>}

        {/* Error */}
        {error && <p className="text-red-400">{error}</p>}

        {/* Empty state */}
        {!loading && entries.length === 0 && (
          <p className="text-gray-400">No entries yet. Start writing one.</p>
        )}

        {/* Entries */}
        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry._id}
              className="bg-[#1a2136] p-6 rounded-xl border border-gray-700"
            >
              <p className="text-gray-200 mb-4">{entry.content}</p>

              <p className="text-sm text-gray-400 mb-4">
                {new Date(entry.createdAt).toLocaleString()}
              </p>

              <div className="flex gap-4">
                <Link
                  to={`/journal/${entry._id}`}
                  className="text-purple-400 hover:underline"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(entry._id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
