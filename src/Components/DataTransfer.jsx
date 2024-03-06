import React from "react";
import { Link } from "react-router-dom";
const DataTransfer = () => {
  return (
    <>
      <section className="section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="custom-text-box">
                <h2 id="datatransfer">Why Choose Parokia?</h2>
                <br />
                <p className="text-black" id="aboutcontent">
                  Parokia is a robust online cum Offline application for the
                  integrated data management of a Diocese cum Parish with
                  facilities manage families, members & sacraments. Parokia is
                  accessible at the diocesan, parish, family or individual
                  member level. Diocesan administrator can have access to all
                  information related to the diocese.
                </p>
                <Link
                  to="/aboutus"
                  className="button-tertiary-- button-tertiary--small button-tertiary">
                  <span className="button-tertiary__link">Learn more</span>
                  <span className="button-tertiary__arrow">
                    <svg
                      height={20}
                      viewBox="0 0 45 20"
                      width={45}
                      xmlns="http://www.w3.org/2000/svg">
                      <g className="arrow" fill="#1c2375" fillRule="evenodd">
                        <path d="m16.8710977 7h-8.4685101-5.77751849l-2.62506911 6h8.4025876 8.4685101 19.1289023v-6z" />
                        <path d="m28 0v10.0008542 9.9991458l8.5-5.0004271 8.5-4.9987187-8.5-5.00042711z" />
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <section className="CTA--dark CTA--left CTA--wide CTA">
                <div className="container">
                  <div className="CTA__wrapper">
                    <div className="CTA__primary">
                      <div className="CTA__heading">
                        <div>
                          <p>
                            <h2>
                              Find the right solution for your <br />
                              church’s size and needs.&nbsp;
                            </h2>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="CTA__secondary">
                      <a
                        href="/"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        className="button-primary--dark button-primary-- button-primary"
                        target>
                        <span className="button-primary__link">
                          Free 30-Day Trial
                        </span>
                        <span className="button-primary__arrow">
                          <svg
                            height={35}
                            viewBox="0 0 38 35"
                            width={38}
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                              <path
                                className="box"
                                d="m1.2 1.2h35.6v32.6h-35.6z"
                                stroke="#1c2375"
                                strokeWidth="2.4"
                              />
                              <g
                                className="arrow"
                                fill="#ff6f61"
                                transform="translate(7 12)">
                                <path d="m9.57874564 3.624225h-4.65505226-3.17584204l-1.44297329 3.48333333h4.61881533 4.65505226 10.51495936v-3.48333333z" />
                                <path d="m15.3838328 0v5.36616667 5.36525003l4.7098722-2.68308337 4.7098722-2.68216666-4.7098722-2.68308334z" />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTransfer;
