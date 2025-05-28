import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CalendarSection from "./components/CalendarSection";

import "./styles/App.css";
import BodySection from "./components/BodySection";
import ActivityChart from "./components/ActivityChart";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="content-body">
          <Dashboard/>
          <CalendarSection />
        </div>
      </main>
    </div>
  );
}

export default App;
