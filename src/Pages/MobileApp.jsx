import React from "react";
import "./css/Mobile.css";

const MobileApp = () => {
  return (
    <>
      <div className="section-title mt-4"></div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="titlelg">Manage your Parish from your Mobile</h1>
            <p className="paragraph">
              Download customize Parokia app for iOS or Android and get
              everything Parokia Parish Management™ offers on your mobile
              device.
            </p>
            <img
              src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/6494883b0f431d41489c9b03_google-play-badge%201.png"
              loading="lazy"
              alt=""
              className="button-app"
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <img
              src="https://assets-global.website-files.com/63e2e08df72ab98959f09628/6494883b92e570c9f93204bd_app-store-download%201.png"
              loading="lazy"
              alt=""
              className="button-app"
            />
            <br />
          </div>
          {/* Second column */}
          <div className="col-md-6">
            <img
              src="./assets/img/cristo/mobileheader.png"
              id="imgcol"
              alt="cristo"
            />
          </div>
        </div>
      </div>
      <div className="section mobileapp section-med bg-light-blue is-app wf-section">
        <div className="container w-container">
          <div className="flex-msb border-app swap">
            <div className="wrapper stretch">
              {/* <h2>Connect with Your People</h2> */}
              <div className="eyebrow">Parokia App</div>
              <h1 className="mobile-margin-btm">
                For Parish Admin
                <br />
              </h1>
              <ul className="list-bullet">
                <li className="margin-btm-sml">
                  Add new church Families, Members, Sacraments, BCC, Commission,
                  Association, Prayer Request, Donation and Subscription details
                  of the parish.
                  <br />
                </li>
                <li>
                  You can focus more on your mission.
                  <br />
                </li>
              </ul>
            </div>
            <img
              src="assets/img/cristo/Mobile-1.png"
              className="app-screenshot"
              alt="cristo app dashboard"
            />
          </div>
          <div className="flex-msb border-app">
            <div className="wrapper stretch">
              <div className="eyebrow">Parokia App</div>
              <h1 className="mobile-margin-btm">
                For Parish Members
                <br />
              </h1>
              <ul className="list-bullet">
                <li className="margin-btm-sml">
                  Create &amp; Maintain Member Profile (Education, Sacraments,
                  Profession, Formation, Holy Order etc.…) for the Province.
                  <br />
                </li>
                <li>
                  Publishing Calendar Events &amp; Circular’s and sending them
                  through our application.
                  <br />
                </li>
              </ul>
            </div>
            <img
              src="assets/img/cristo/Mobile-1.png"
              className="app-screenshot"
              alt="Cristo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
