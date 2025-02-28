import React from "react";
import "./paintbox.css";
import { Link } from "react-router";

type Painting = {
  id: number;
  url: string;
  title: string;
  description: string;
};

function Paintbox({ painting }: { painting: Painting }) {
  return (
    <div id="img">
      <img id="imgsrc" src={painting.url} />
    </div>
  );
}

export default Paintbox;
