import React from "react";
import "../styles/components/sidebar.css";
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaStethoscope,
  FaChartBar,
  FaComments,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Healthcare.</h2>
      <nav>
        <ul>
          <li className="active"><FaTachometerAlt /> Dashboard</li>
          <li><FaHistory /> History</li>
          <li><FaCalendarAlt /> Calendar</li>
          <li><FaStethoscope /> Appointments</li>
          <li><FaChartBar /> Statistics</li>
        </ul>
      </nav>
      <div className="tools">
        <p>Tools</p>
        <ul>
          <li><FaComments /> Chat</li>
          <li><FaLifeRing /> Support</li>
        </ul>
      </div>
      <div className="setting"><FaCog /> Setting</div>
    </aside>
  );
};

export default Sidebar;
