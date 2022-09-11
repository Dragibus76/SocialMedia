import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import './Profil.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

const Profil = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profil