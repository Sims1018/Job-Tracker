import { useState } from "react";
import Dashboard from "./assets/component/Dashboard";
import AddJob from "./assets/component/AddJob";
import MyJob from "./assets/component/MyJob";

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <Dashboard jobs={jobs} />

      <AddJob jobs={jobs} setJobs={setJobs} />

      <MyJob jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export default App;