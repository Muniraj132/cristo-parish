import React from "react";
import { Link } from "react-router-dom";
const WelcomeCristo = () => {
  return (
    <>
      <h2 className="mt-4 text-center" id="welcomecristo">
        Stay connected with your parish family <br /> The smartest way to
        Evangelize in today’s Catholic Church.
      </h2>

      <section className="Blurbs--dark Blurbs--card Blurbs">
        <div className="container">
          <div className="Blurbs__blurb-wrapper spacebetween">
            <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--1">
              <div className="Blurbs__blurb-inner">
                <div className="Blurbs__blurb-primary">
                  <h5 className="Blurbs__lead-in">
                    Parish Management Software (PmS)
                  </h5>
                  <div className="Blurbs__title">
                    <figure className="Blurbs__image">
                      <img
                        decoding="async"
                        src="https://elexio.wpenginepowered.com/wp-content/uploads/2019/07/church_management_software.png"
                        alt=""
                      />
                    </figure>

                    <h4 className="Blurbs__blurb-heading">
                      Simplify Church Management
                    </h4>
                  </div>
                  <div className="Blurbs__blurb-content">
                    <p>
                      CRISTO Parish Office empowers parishes to simplify the
                      tasks associated with the daily management of family and
                      parish information. Manage the myriad of details required
                      to make your parish run efficiently so you can effectively
                      deal with the needs of your parish community.
                    </p>
                  </div>
                </div>
                <div className="Blurbs__blurb-secondary">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/families">Families</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/members">Members</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/baptism">Baptism</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/holy-communion">Holy Communion</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/sacrements">Sacraments</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/parish-liturgicalcalendar">
                        Liturgical Calendar
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/parish-subscription">Subscription</Link>
                    </li>
                    <li>
                      <i className="fas fa-check-circle fs-xl mt-1 me-3"></i>
                      <Link to="/parish-scheduledsms">Scheduled SMS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
              <div className="Blurbs__blurb-inner">
                <span
                  className="Blurbs__title"
                  href="/parish/parish-dashboard"
                  target>
                  <figure className="Blurbs__image">
                    <img
                      decoding="async"
                      src="/assets/img/module/dashboard.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="Blurbs__blurb-heading">Dashboard</h4>
                </span>
                <div className="Blurbs__blurb-content">
                  <p>
                    <span>
                      A Parish Priest can view information about his own parish.
                      And view the total number of families, total number of
                      BCCs, total number of members,{" "}
                    </span>
                  </p>
                  <Link
                    to="/dashboard"
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
            </div>
            <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
              <div className="Blurbs__blurb-inner">
                <span
                  className="Blurbs__title"
                  href="/parish/sacrament/"
                  target>
                  <figure className="Blurbs__image">
                    <img
                      decoding="async"
                      src="/assets/img/module/Baptism.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="Blurbs__blurb-heading">Sacraments</h4>
                </span>
                <div className="Blurbs__blurb-content">
                  <p>
                    <span>
                      PmS Sacramental Register saves time by allowing you to
                      search on a variety of information to quickly find the
                      exact volume and page number of an entry in your physical
                      register.
                    </span>
                  </p>
                  <Link
                    to="/sacrements"
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
            </div>
            <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
              <div className="Blurbs__blurb-inner">
                <span className="Blurbs__title">
                  <figure className="Blurbs__image">
                    <img
                      decoding="async"
                      src="/assets/img/module/Subscription.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="Blurbs__blurb-heading">Subscription</h4>
                </span>
                <div className="Blurbs__blurb-content">
                  <p>
                    <span>
                      Subscription feature eases parish admin to maintain the
                      subscription amounts which are paid by the people
                      regularly.
                    </span>
                  </p>
                  <Link
                    to="/parish-subscription"
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
            </div>
            <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
              <div className="Blurbs__blurb-inner">
                <span className="Blurbs__title">
                  <figure className="Blurbs__image">
                    <img
                      decoding="async"
                      src="/assets/img/module/Liturgical.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="Blurbs__blurb-heading">Liturgical Calendar</h4>
                </span>
                <div className="Blurbs__blurb-content">
                  <p>
                    <span>
                      Liturgical Calendar feature lets parish admin to allocate
                      the events to the communities to be organized like Daily
                      Mass, Sunday Mass,{" "}
                    </span>
                  </p>
                  <Link
                    to="/parish-liturgicalcalendar"
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
            </div>
            <Link
              to="/dashboard"
              className="button-primary--light button-primary--small button-primary learmorestyle">
              <span className="button-primary__link">Learn more</span>
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeCristo;
