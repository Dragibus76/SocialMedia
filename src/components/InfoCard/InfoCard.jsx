import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Statut </b>
        </span>
        <span>En Couple</span>
      </div>

      <div className="info">
        <span>
          <b>Vit a </b>
        </span>
        <span>Yvetot</span>
      </div>

      <div className="info">
        <span>
          <b>Travaille a  </b>
        </span>
        <span>Digital Design Innovation</span>
      </div>

      <button className="button logout-button">Déconnexion</button>
    </div>
  );
};

export default InfoCard;