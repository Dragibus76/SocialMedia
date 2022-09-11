import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilPage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Personnes suivis</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilPage && (
            <React.Fragment>
              <div className="vl">

              </div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </React.Fragment>
          )}
        </div>
        <hr />
      </div>
      {ProfilPage ? "" : <span>Profil</span>}
    </div>
  );
};

export default ProfileCard;
