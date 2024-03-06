import React from "react";
import ModalForm from "../Components/ModalForm";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="section about section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <br />
          <div className="section-title">
            <h3 className="mt-4 text-center">
              <span>About Parokia (Parish Management Software)</span>
            </h3>
            <br />
            <p>
              Parokia is a robust online cum Offline application for the
              integrated data management of a Diocese cum Parish with facilities
              manage families, members & sacraments. Parokia is accessible at
              the diocesan, parish, family or individual member level. Diocesan
              administrator can have access to all information related to the
              diocese.
            </p>
          </div>
          <br />
          <div className="row">
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={100}>
              <ul>
                <li>
                  <h3>Purpose</h3>
                </li>
                <li>
                  It describes the software function and non-functional
                  requirements for release 1.0.0 of Parokia . This document is
                  intended to be used by the member s of the project team who
                  will implement and verify the correct functioning of the
                  system
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={100}>
              <ul>
                <li>
                  <h3>Vision</h3>
                </li>
                <li>
                  <p>
                    It a user friendly software tool for the Diocese and Parish.
                    It organizes and manages the information of the diocese,
                    parishes, families and members in most economical and
                    effective way.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-msb mobile-flip margin-btm-med">
          <div className="wrapper left">
            <h3 className="softwares">
              We’ll export the data from your current system and import it into
              CristO for you…
            </h3>
            <p style={{}}>
              {" "}
              Our import team will transfer your people data in from your
              previous system in any format of excel,docx...
            </p>
            <button
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="getstarted">
              TRY IT OUT FIRST
            </button>
          </div>
          <div className="wrapper-right">
            <img
              src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/63e3e0f64f5446de40f39a4f_move-you-in.svg"
              loading="lazy"
              alt=""
              className="img-data"
            />
          </div>
        </div>
      </section>

      <ModalForm />
    </>
  );
};

export default AboutUs;
