import React from "react";
import NameCardAdd from "./NameCardAdd";
import './NameCard.css'
import { Card } from "semantic-ui-react";

const NameCard = () => {
  return (
    <div>
      <Card fluid header="Name Card" className="nameCardHeader" />
      <NameCardAdd />
    </div>
  );
};

export default NameCard;
