// import React from 'react'
import { ProfileNav } from "./ProfileNav";
import { ProfileContent } from "./ProfileContent";


const ProfileDetail = () => {
  return (
    <div>
      <ProfileNav />
      <main>
        <div>
          <ProfileContent />
        </div>
      </main>
    </div>
  );
};

export default ProfileDetail;
