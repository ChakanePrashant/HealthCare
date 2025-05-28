import React from "react";
import "../styles/components/appointmentCard.css";

function AppointmentCard({ title, time, doctor, icon }) {
  return (
    <div className="appointment-card">
      <span className="icon">{icon}</span>
      <div className="appointment-info">
        <h5>{title}</h5>
        <p>{time}</p>
        <small>{doctor}</small>
      </div>
    </div>
  );
}

export default AppointmentCard;
