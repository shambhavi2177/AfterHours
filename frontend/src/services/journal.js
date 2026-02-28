import api from "./api";

/**
 * Fetch all journal entries for logged-in user
 */
export const getAllEntries = async () => {
  const res = await api.get("/journal");
  return res.data;
};

/**
 * Create a new journal entry
 */
export const createEntry = async (entryData) => {
  const res = await api.post("/journal", entryData);
  return res.data;
};

/**
 * Fetch a single entry
 */
export const getSingleEntry= async (id) => {
  const res = await api.get(`/journal/${id}`);
  return res.data;
};

/**
 * Update an entry
 */
export const updateEntry = async (id, entryData) => {
  const res = await api.patch(`/journal/${id}`, entryData);
  return res.data;
};

/**
 * Delete an entry
 */
export const deleteEntry = async (id) => {
  const res = await api.delete(`/journal/${id}`);
  return res.data;
};
