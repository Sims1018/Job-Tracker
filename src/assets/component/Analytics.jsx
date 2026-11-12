
import "./Analytics.css";

function Analytics({ jobs }) {
  const totalJobs = jobs.length;

  const applied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offer = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const getPercentage = (count) => {
    return totalJobs === 0
      ? 0
      : Math.round((count / totalJobs) * 100);
  };

  return (
    <div className="analytics-page">
      <h1>Analytics Dashboard 📊</h1>
      <p>Track your job application performance.</p>

      <div className="analytics-container">

        <div className="analytics-card">
          <h3>Total Applications</h3>
          <h2>{totalJobs}</h2>
        </div>

        <div className="analytics-card">
          <h3>Applied</h3>
          <h2>{applied}</h2>
          <p>{getPercentage(applied)}%</p>
        </div>

        <div className="analytics-card">
          <h3>Interview</h3>
          <h2>{interview}</h2>
          <p>{getPercentage(interview)}%</p>
        </div>

        <div className="analytics-card">
          <h3>Offers</h3>
          <h2>{offer}</h2>
          <p>{getPercentage(offer)}%</p>
        </div>

        <div className="analytics-card">
          <h3>Rejected</h3>
          <h2>{rejected}</h2>
          <p>{getPercentage(rejected)}%</p>
        </div>

      </div>

      <h2 className="progress-heading">Application Progress</h2>

      {[
        { name: "Applied", count: applied },
        { name: "Interview", count: interview },
        { name: "Offer", count: offer },
        { name: "Rejected", count: rejected }
      ].map((item) => (
        <div className="progress-item" key={item.name}>
          <div className="progress-info">
            <span>{item.name}</span>
            <span>{getPercentage(item.count)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${getPercentage(item.count)}%`
              }}
            ></div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Analytics;
