import { useState } from "react";
import "./MyJob.css";

function MyJobs({ jobs, setJobs }) {

  const [editingId, setEditingId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  




  // Edit button
  const startEdit = (job) => {
    setEditingId(job.id);
    setSelectedStatus(job.status);
  };

  // Delete job
  const deleteJob = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {
      setJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== id)
      );
    }
  };

  // Save updated status
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

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setSelectedStatus("");
  };

  const filteredJobs = jobs.filter((job) => {

  const matchesSearch = job.company
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    job.status === statusFilter;

  return matchesSearch && matchesStatus;
});


  return (
    <div className="my-jobs-page">

      <h1>My Jobs 💼</h1>
       
      <div className="search-filter-container">

  <input
    type="text"
    placeholder="🔍 Search company name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option value="All">All Jobs</option>
    <option value="Applied">Applied</option>
    <option value="Interview">Interview</option>
    <option value="Offer">Offer</option>
    <option value="Rejected">Rejected</option>
  </select>

</div>
     
      <div className="jobs-container">

        {jobs.length === 0 ? (
          <h2>No Jobs Added Yet!</h2>
        ) : (

          filteredJobs.map((job) => (

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
                    <option value="Applied">
                      Applied
                    </option>

                    <option value="Interview">
                      Interview
                    </option>

                    <option value="Offer">
                      Offer
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>
                  </select>

                  <div className="bottom CS">
                    <button
                    onClick={() => saveStatus(job.id)}
                    className="save-status-btn"
                  >
                    💾 Save
                  </button>

                  <button
                    onClick={cancelEdit}
                    className="cancel-btn"
                  >
                    ❌ Cancel
                  </button>
                  </div>

                </div>

              ) : (

                <div className="status-section">

                  <p>
                    Status: <b>{job.status}</b>
                  </p>

                  <div className="job-actions">

                    <button
                      onClick={() => startEdit(job)}
                      className="edit-btn"
                    >
                      ✏️ Edit Status
                    </button>

                    <button
                      onClick={() => deleteJob(job.id)}
                      className="delete-btn"
                    >
                      🗑️ Delete
                    </button>

                  </div>

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