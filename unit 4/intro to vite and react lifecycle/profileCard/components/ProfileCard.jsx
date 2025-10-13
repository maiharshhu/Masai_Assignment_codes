import React from 'react';

// Default values for props
function ProfileCard({
  name = 'Anonymous User',
  age = 'N/A',
  bio = 'No biography available'
}) {
  // Truncate bio logic
  const truncatedBio =
    bio.length > 100
      ? bio.substring(0, 100) + '... Read More'
      : bio;

  // Simple inline styles for clean presentation
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    margin: '12px auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.07)'
  };
  const nameStyle = { fontWeight: 'bold', fontSize: '1.2rem' };
  const ageStyle = { color: '#555', fontSize: '1rem', margin: '4px 0' };
  const bioStyle = { marginTop: '6px', color: '#333' };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{truncatedBio}</div>
    </div>
  );
}

export default ProfileCard;
