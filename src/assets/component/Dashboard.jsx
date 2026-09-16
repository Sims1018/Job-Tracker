import { Link } from "react-router-dom";
import "./dash.css";

function Dashboard({ jobs }) {

  const totalJobs = jobs.length;

  const appliedJobs = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewJobs = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offerJobs = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  return (
    <div className="Dash-Board">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          ☰ <span>JobTracker</span>
        </div>

        <div className="user-section">
          <span>🔔</span>
          <span>👤 Ranu</span>
        </div>

      </nav>

      <div className="main-container">

        {/* Sidebar */}
        <aside className="sidebar">

          <Link to="/" className="menu-item active">
            🏠 <span>Dashboard</span>
          </Link>

          <Link to="/add-job" className="menu-item">
            ➕ <span>Add Job</span>
          </Link>

          <Link to="/my-jobs" className="menu-item">
            💼 <span>My Jobs</span>
          </Link>

          <Link to="/analytics" className="menu-item">
            📊 <span>Analytics</span>
          </Link>

          <Link to="/profile" className="menu-item">
            👤 <span>Profile</span>
          </Link>

        </aside>

        {/* Content */}
        <main className="content">

          <h1>Welcome Back! 👋</h1>

          <p className="subtitle">
            Track and manage your job applications.
          </p>

          {/* Statistics */}
          <div className="stats-container">

            <div className="stat-card">
              <p>Total Applications</p>
              <h2>{totalJobs}</h2>
            </div>

            <div className="stat-card">
              <p>Applied</p>
              <h2>{appliedJobs}</h2>
            </div>

            <div className="stat-card">
              <p>Interview</p>
              <h2>{interviewJobs}</h2>
            </div>

            <div className="stat-card">
              <p>Offer</p>
              <h2>{offerJobs}</h2>
            </div>

          </div>

          {/* Recent Applications */}
          <div className="recent-applications">

            <h2>Recent Applications</h2>

            {jobs.length === 0 ? (
              <p>No jobs added yet!</p>
            ) : (
              jobs.slice(-3).reverse().map((job) => (

                <div className="job-item" key={job.id}>

                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.position}</p>
                  </div>

                  <span
                    className={`status ${job.status.toLowerCase()}`}
                  >
                    {job.status}
                  </span>

                </div>

              ))
            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;