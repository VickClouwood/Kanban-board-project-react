import React from "react";
import { MoreHorizontal } from "react-feather";
import "./Board.css";
import Card from "../Card/Card";

function Board() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To Do <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board;
