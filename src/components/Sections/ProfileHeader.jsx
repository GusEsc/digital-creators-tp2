import React from 'react';

export default function ProfileHeader({ name, image, location, age, role }) {
  return (
    <div className="profile-header">
      {image && <img src={image} alt={name} className="profile-avatar" />}
      <h1 className="profile-name">{name}</h1>
      <p className="profile-location">📍 {location}</p>
      <p className="profile-age">{age} años</p>
      {role && <p className="profile-role">{role}</p>}
    </div>
  );
}