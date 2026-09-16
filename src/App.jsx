import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./assets/component/Dashboard";
import AddJob from "./assets/component/AddJob";
import MyJobs from "./assets/component/MyJob";

function App() {
  // LocalStorage se jobs load karna
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  // Jobs change hone par LocalStorage me save karna
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard jobs={jobs} />}
        />

        <Route
          path="/add-job"
          element={
            <AddJob
              jobs={jobs}
              setJobs={setJobs}
            />
          }
        />

        <Route
          path="/my-jobs"
          element={
            <MyJobs
              jobs={jobs}
              setJobs={setJobs}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;