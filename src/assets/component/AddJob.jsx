import { useState } from "react";
import "./Add-job.css";

function AddJob({ jobs, setJobs }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      company: company,
      position: position,
      location: location,
      status: status,
      notes: notes,
    };

    // Add new job
    setJobs((prevJobs) => [...prevJobs, newJob]);

    alert("Job Added Successfully!");

    setCompany("");
    setPosition("");
    setLocation("");
    setStatus("Applied");
    setNotes("");
  };

  return (
    <div className="add-job-page">
      <h1>Add New Job</h1>

      <form onSubmit={submitHandler} className="add-job-form">

        <div className="form-group">
          <label>Company Name</label>

          <input
            type="text"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Job Position</label>

          <input
            type="text"
            placeholder="Enter job position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>

          <input
            type="text"
            placeholder="Indore or Remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label>Notes</label>

          <textarea
            placeholder="Write notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" className="save-btn">
          + Save Job
        </button>

      </form>
    </div>
  );
}

export default AddJob;