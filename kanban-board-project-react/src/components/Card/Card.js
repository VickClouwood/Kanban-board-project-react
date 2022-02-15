import React from "react";
import "./Card.css";
import { MoreHorizontal, Clock, CheckSquare } from "react-feather";
import Chip from "../Chip/Chip";

function Card() {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">
          <Chip text="Frontend" color="green" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card_title">lorem ipsum</div>
      <div className="card_footer">
        <p>
          <Clock />
          15 Feb
        </p>
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  );
}

export default Card;
