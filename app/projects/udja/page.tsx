import React from "react";
import TypegridVideo from "@/public/typegrid.mp4";
import TypegridImage from "@/public/typegrid.png";

function Udja() {
  return (
    <div>
      <img src={TypegridImage} alt="Typegrid" />

      <video autoPlay loop muted>
        <source src={TypegridVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Udja;
