import { useState } from "react";
import api from "../../services/api";

export default function CreateProjectModal({
  open,
  onClose,
  onSuccess,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("access");

      await api.post(
        "/projects/",
        {
          title,
          description,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onSuccess();
      onClose();

      setTitle("");
      setDescription("");
      setStatus("active");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="w-full max-w-md rounded-3xl bg-white p-8">

        <h2 className="mb-6 text-2xl font-bold">
          New Project
        </h2>

        <input
          className="mb-4 w-full rounded-xl border p-3"
          placeholder="Project Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          className="mb-4 w-full rounded-xl border p-3"
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <select
          className="mb-6 w-full rounded-xl border p-3"
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-200 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  );
}