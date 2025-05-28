import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard";
import "../styles/components/calendarSection.css";

// Sample appointments/events data keyed by date strings "YYYY-MM-DD"
const sampleEvents = {
  "2025-05-26": [{ title: "Dentist", time: "09:00-11:00", doctor: "Dr. Cameron Williamson", icon: "🦷" }],
  "2025-05-27": [{ title: "Physiotherapy", time: "11:00-12:00", doctor: "Dr. Kevin Djones", icon: "💪" }],
  "2025-05-29": [
    { title: "Health checkup complete", time: "11:00 AM", icon: "📌"},
    { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
  ],
  "2025-05-30": [
    { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
    { title: "Neurologist", time: "16:00 PM", icon: "👨‍⚕️" },
  ],
};

function CalendarSection() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const goPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getCurrentWeek = () => {
    const current = new Date();
    const dayOfWeek = current.getDay();
    const sunday = new Date(current);
    sunday.setDate(current.getDate() - dayOfWeek);
    const week = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      week.push(date);
    }

    return week;
  };

  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const currentWeekDays = getCurrentWeek();

  // Separate dentist/physiotherapy and other upcoming
  const currentMonthKey = `${year}-${String(month + 1).padStart(2, "0")}`;
  const allAppointments = Object.entries(sampleEvents)
    .filter(([date]) => date.startsWith(currentMonthKey))
    .flatMap(([date, events]) => events.map((event) => ({ date, ...event })));

  const isMainCard = (title) => title === "Dentist" || title === "Physiotherapy";

  const mainAppointments = allAppointments.filter((a) => isMainCard(a.title));
  const otherAppointments = allAppointments.filter((a) => !isMainCard(a.title));

  return (
    <section className="calendar-section">
      <div className="calendar-header">
        <button onClick={goPrevMonth} className="nav-btn">←</button>
        <h3>{monthNames[month]} {year}</h3>
        <button onClick={goNextMonth} className="nav-btn">→</button>
      </div>

      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="calendar-week">
        {currentWeekDays.map((day, idx) => {
          const dateKey = formatDateKey(day);
          const events = sampleEvents[dateKey] || [];

          return (
            <div key={idx} className={`calendar-cell ${isToday(day) ? "today" : ""}`}>
              <div className="date-number">{day.getDate()}</div>
              <div className="events-icons">
                {events.map((event, i) => (
                  <span key={i} className="event-icon" title={`${event.title} at ${event.time}`}>
                    {event.icon || "📌"}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="appointments">
        <div className="appointment-row">
          {mainAppointments.map((appt, idx) => (
            <AppointmentCard
              key={idx}
              title={appt.title}
              time={appt.time}
              doctor={appt.doctor}
              icon={appt.icon}
            />
          ))}
        </div>

        <h4>Upcoming Schedule</h4>
        <div className="appointment-row">
          {otherAppointments.map((appt, idx) => (
            <AppointmentCard
              key={idx}
              title={appt.title}
              time={appt.time}
              doctor={appt.doctor}
              icon={appt.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
