import React from 'react';
import '../styles/components/Profile.scss';
import ExpandableProfile from './ExpandableProfile';

const Profile: React.FC = () => {
  // return (
  //   // <div className="card profile">
  //   //   <img src="./assets/images/me.jpg" alt="Profile picture" />
  //   //   <h2>Егор Абрамов</h2>
  //   //   <p>kurays</p>
  //   // </div>
  // );
  return <ExpandableProfile />;
};

export default Profile;