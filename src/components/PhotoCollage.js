import React from "react";
import dayFull from "../images/day_banner_view.png";
import dayFront from "../images/day_full_front_view.png";
import nightFront from "../images/night_front_view.png";
import nightFull from "../images/banner.png";
import dayWaterfall from "../images/day_waterfall_view.png";
import daySide from "../images/day_side_view.png";

export default function PhotoCollage() {
  return (
    <div className="photoCollage">
      <img className="photoCollage--photo photo1" src={dayFull} />
      <img className="photoCollage--photo photo2" src={dayFront} />
      <img className="photoCollage--photo photo3" src={nightFront} />
      <img className="photoCollage--photo photo4" src={nightFull} />
      <img className="photoCollage--photo photo5" src={dayWaterfall} />
      <img className="photoCollage--photo photo6" src={daySide} />
    </div>
  );
}
