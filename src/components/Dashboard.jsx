import React from "react";
import BodySection from "./BodySection"; // ✅ FIXED
import ActivityChart from "./ActivityChart"; // ✅ FIXED
import "../styles/components/dashboard.css"; // ✅ Ensure .css extension


function Dashboard() {
  return (
    <div className="dashboard-container">
      <BodySection />
      
      <div className="activity-section">
        
        <ActivityChart />
      </div>
    </div>
  );
}

export default Dashboard;
