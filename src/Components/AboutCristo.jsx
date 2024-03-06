import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutCristo = () => {
  return (
    <section id="about" className="abouts" style={{ marginBottom: "-50px" }}>
      <div className="container">
        <div className="row content">
          <div className="col-lg-6 ">
            <h2>
              <b style={{ color: "#ff950b" }}>PAROKIA</b> Parish Management
              Software
            </h2>
            <p style={{ textAlign: "left" }}>
              "Church Management Made Easy with PAROKIA Parish Administrative
              Software PAROKIA Parish Office Software (PmS) is designed to
              streamline church management, making it easier for parishes to
              handle the daily tasks related to family and parish information.
              With our software, you can efficiently manage all the essential
              details necessary to ensure your parish operates smoothly,
              allowing you to focus on meeting the needs of your parish
              community effectively."
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/img/parish.jpg"
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCristo;
