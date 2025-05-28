import React from "react";
import BodySection from "./BodySection"; 
import ActivityChart from "./ActivityChart"; 
import "../styles/components/dashboard.css"; 


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
