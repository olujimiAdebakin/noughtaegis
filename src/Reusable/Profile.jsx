import React from 'react'
import "./Profile.css"
import { useParams } from 'react-router-dom';

const Profile = () => {

    const profiles = {
      "Adebakin Olalekan": {
        role: "Frontend Developer",
        bio: "A passionate frontend developer with a love for creating beautiful user interfaces.",
      },
      "Adisa Malik": {
        role: "Backend Developer",
        bio: "Experienced backend developer focusing on API development and database management.",
      },
      "Talodabioluwa": {
        role: "UI/UX Designer",
        bio: "Creative UI/UX designer with a knack for crafting intuitive user experiences.",
      },
    };

    const { name } = useParams();
    const memberProfile = profiles[name] || {};
  return (
    <div className="profile-page">
      <h2>Profile of {name}</h2>
      <h3>Role: {memberProfile.role}</h3>
      <p>{memberProfile.bio}</p>

    </div>
  );
}

export default Profile