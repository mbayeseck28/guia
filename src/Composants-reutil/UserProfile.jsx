import React from 'react';
import '../Composants/Assets/Css/UserProfile.css'

function UserProfile({ name, role }) {
  return (
    <div className="image mx-3">
      <div className="img shadow">
        
      </div>
      <h6 className="fw-semibold my-2 mx-auto">{name}</h6>
      <p className="mx-auto text-secondary">{role}</p>
    </div>
  );
}

export default UserProfile;
