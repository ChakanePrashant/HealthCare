import React from "react";
import "../styles/components/bodySection.css";

const BodySection = () => {
  return (
    <section className="body-section">
      <div className="left-section">
        <div className="human-body-card">
          <img
            src="/assets/human-body.png"
            alt="Human Body"
            className="human-body-img"
          />
          <div className="overlay-tag heart">❤️ Healthy Heart</div>
          <div className="overlay-tag leg">🦵 Healthy Leg</div>
        </div>
      </div>

      <div className="right-section">
        <div className="health-status">
          <div className="status-item">
            <span>🫁</span> Lungs
            <progress value="60" max="100"></progress>
            <small>26 Oct 2021</small>
          </div>
          <div className="status-item">
            <span>🦷</span> Teeth
            <progress value="80" max="100"></progress>
            <small>26 Oct 2021</small>
          </div>
          <div className="status-item">
            <span>🦴</span> Bone
            <progress value="40" max="100"></progress>
            <small>26 Oct 2021</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodySection;