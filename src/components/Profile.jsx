import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src="/images/profile.png"
        alt="Profile"
      />
      <h2 className="profile-name">Shahnoza Yadgarova</h2>
      <p className="profile-title">Undergraduate Student</p>
      <p>KIXLAB, KAIST</p>
      <p>
        <a href="mailto:yadgarova@kaist.ac.kr">yadgarova@kaist.ac.kr</a>
      </p>

      <div className="profile-links">
        {/* Example icons (Google Scholar, CV, GitHub, LinkedIn, Twitter, etc.) */}
        <a href="https://scholar.google.com" target="_blank" rel="noreferrer">
          <img src="/icons/google-scholar.svg" alt="Google Scholar" />
        </a>
        <a href="/path/to/CV.pdf" target="_blank" rel="noreferrer">
          <img src="/icons/cv-icon.svg" alt="CV" />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/username"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Profile;