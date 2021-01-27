import React from "react";
import NameCardAdd from "./NameCardAdd";
import './NameCard.css'

const NameCard = () => {
  return (
    <div>
      <Card fluid header="Name Card" className="nameCardHeader" />
      <NameCardAdd />
    </div>
  );
};

export default NameCard;
