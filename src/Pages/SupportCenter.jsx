import React from "react";
import "./css/Support.css";

const SupportCenter = () => {
  return (
    <>
      <section className="section-padding" id="section_2">
        <div className="container section-title aboutsectiontit ">
          <h3 className="text-center">
            <span style={{ color: "#0f224d" }}>
              How can we help your church with Parokia?
            </span>
          </h3>
          <p className="text-black " id="aboutcontent">
            We have an expert team of professionals available to answer
            questions and to assist you with supporting Parokia and ensure your
            success with our products. We also have ways for you to find the
            answers that you are looking for just by submitting a ticket within
            your Parokia platform. We also offer online education resources,
            support videos, training opportunities and events.
          </p>
        </div>
        <div className="container py-5">
          <div className="row pb-5 mb-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Product Expert</center>
                  </h5>
                  <img
                    src="./assets/img/cristo/tour.jfif"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:imman@boscosofttech.com">
                        <i className="fas fa-envelope"></i>&nbsp;
                        imman@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:9629146030">+91 9629146030</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Support Team</center>
                  </h5>
                  <img
                    src="./assets/img/cristo/support3.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:cristo@boscosofttech.com">
                        cristo@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:9786000436"> +91 9786000436</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Sales Team</center>
                  </h5>
                  <img
                    src="./assets/img/cristo/sales.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:alwinj@boscosofttech.com">
                        alwinj@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:7395848924">+91 7395848924</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 id="suptit">
                    <center>Product Videos</center>
                  </h5>
                  <img
                    src="./assets/img/cristo/video.png"
                    alt=""
                    className="img-fluid d-block mx-auto mb-3"
                  />
                  <h6 id="det">
                    <center>
                      <a href="mailto:alwinj@boscosofttech.com">
                        alwinj@boscosofttech.com
                      </a>
                    </center>
                  </h6>
                  <div className="phone-container">
                    <p className="small text-muted font-italic"></p>
                    <center>
                      <b>
                        <a href="tel:7395848924">+91 7395848924</a>
                      </b>
                    </center>
                    <p />
                  </div>
                  <p className="small text-muted font-italic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportCenter;
