
import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "",
          email: "",
          phone: "",
          skills: ""
        };
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value
    });
  }

  function handleSave(e) {
    e.preventDefault();

    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile saved successfully!");
  }

  return (
    <div className="profile-page">
      <h1>My Profile 👤</h1>

      <form className="profile-card" onSubmit={handleSave}>
        <h2>Personal Information</h2>

        <label>Full Name</label>
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Phone</label>
        <input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
        />

        <label>Skills</label>
        <input
          name="skills"
          value={profile.skills}
          onChange={handleChange}
          placeholder="Enter your skills"
        />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
