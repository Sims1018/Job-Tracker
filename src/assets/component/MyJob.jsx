import { useState } from "react";
import "./MyJob.css";

function MyJobs({ jobs, setJobs }) {
  const [editingId, setEditingId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  const startEdit = (job) => {
    setEditingId(job.id);
    setSelectedStatus(job.status);
  };

  const saveStatus = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? { ...job, status: selectedStatus }
          : job
      )
    );

    setEditingId(null);
    setSelectedStatus("");
  };

  return (
    <div className="my-jobs-page">
      <h1>My Jobs 💼</h1>

      <div className="jobs-container">

        {jobs.length === 0 ? (
          <h2>No Jobs Added Yet!</h2>
        ) : (
          jobs.map((job) => (
            <div className="job-card" key={job.id}>

              <h2>{job.company}</h2>

              <h3>{job.position}</h3>

              <p>📍 {job.location}</p>

              <p>📝 {job.notes}</p>

              {/* EDIT MODE */}
              {editingId === job.id ? (
                <div className="edit-section">

                  <select
                    value={selectedStatus}
                    onChange={(e) =>
                      setSelectedStatus(e.target.value)
                    }
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  <button
                    onClick={() => saveStatus(job.id)}
                    className="save-status-btn"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditingId(null)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>

                </div>
              ) : (
                <div className="status-section">

                  <p>
                    Status: <b>{job.status}</b>
                  </p>

                  <button
                    onClick={() => startEdit(job)}
                    className="edit-btn"
                  >
                    ✏️ Edit Status
                  </button>

                  <button className=".delete-btn">Delete</button>

                </div>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default MyJobs;