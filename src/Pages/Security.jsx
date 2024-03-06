import React from "react";
import "./css/Security.css";

const Security = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-center" id="mobhead" style={{ color: "#002856" }}>
          <b>Data Security</b>
        </h1>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <center>
                <img
                  className="banner-image text"
                  src="https://img.freepik.com/premium-vector/cyber-security-illustration-concept-with-people_23-2148530634.jpg"
                  alt="Cyber Security Banner"
                />
              </center>
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className=" terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    The utilization, retention, or retrieval of client
                    information.
                  </h3>
                </div>
                <br />
                <ul>
                  <li>
                    <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                    Within the bounds of this Agreement and the Contract, and
                    only as allowed therein;
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                    In strict adherence to all relevant laws and regulations
                    that are applicable to the Service Provider.
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                    Unless granted prior written authorization by the Client,
                    the transfer, conveyance, or retention of Client Data beyond
                    the primary server to local desktop or laptop computers in
                    the parish office is strictly prohibited.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    Safeguarding Client Data
                  </h3>
                </div>
                <br />
                <p>
                  The Service Provider acknowledges and commits to handling
                  Client Data with the utmost care, adhering to
                  industry-standard best practices. This involves maintaining
                  the confidentiality, availability, and integrity of Client
                  Data, as well as compliance with applicable state and federal
                  laws and regulations. To achieve this, the following measures
                  will be put in place:
                </p>
                <div className="container mt-4">
                  <ul className="list-group">
                    <li>
                      <i className="fas fa-info-circle text-success fs-xl  mr-1" />
                      Service Provider will establish controls to proactively
                      prevent data breaches.
                    </li>
                    <li>
                      <i className="fas fa-info-circle text-success fs-xl  mr-1" />
                      The System will utilize secure protocols and encryption to
                      protect Client Data during transit.
                    </li>
                    <li>
                      <i className="fas fa-info-circle text-success fs-xl  mr-1" />
                      Service Provider will:
                      <ul className="ml-2">
                        <li>
                          <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                          Restrict administrative access to the System
                        </li>
                        <li>
                          <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                          Control remote access to the System
                        </li>
                        <li>
                          {" "}
                          <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                          Limit account access and privileges to the minimum
                          necessary for the System's proper operation
                        </li>
                        <li>
                          {" "}
                          <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                          Employ named user accounts rather than generic or
                          shared ones
                        </li>
                        <li>
                          {" "}
                          <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                          Implement appropriate auditing and logging for the
                          operating system and applications
                        </li>
                      </ul>
                    </li>
                    <li>
                      <i className="fas fa-info-circle text-success fs-xl  mr-1" />
                      The System will allow for the changing of both System and
                      user passwords
                    </li>
                  </ul>
                  <br />
                  <h4>
                    <i className="fas fa-check-circle text-secoundry fs-xl  mr-1 me-3" />
                    Product Maintenance and Support
                  </h4>
                  <ul>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />{" "}
                      Service Provider will have a process in place for timely
                      review, testing, and installation of critical patches to
                      maintain the confidentiality, integrity, and availability
                      of the System and Client Data
                    </li>
                    <li>
                      {" "}
                      <i className=" fa fa-info-circle mr-1 text-success" />{" "}
                      Strict change management procedures will be followed
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" /> The
                      product will receive support from Service Provider,
                      provided Client maintains the required subscriptions.
                      Service Provider will notify Client 12 months in advance
                      if the product is to become unsupported.
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      If necessary, and with the requisite subscriptions
                      maintained by the Client, Service Provider will offer
                      remote support through a secure connection method that
                      includes event auditing. Remote access will be granted on
                      an as-needed or as-requested basis
                    </li>
                  </ul>
                  <h4>
                    <i className="fas fa-check-circle text-secoundry fs-xl  mr-1 me-3" />{" "}
                    Data Protections:
                  </h4>
                  <ul>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      Service Provider will only utilize, store, disclose, or
                      access Client Data as required for agreed-upon purposes
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      Adequate controls will be implemented to prevent
                      unauthorized use, disclosure, loss, acquisition, or access
                      to Client Data. This may involve personnel security
                      measures, such as background checks
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      All transfers of Client Data by Service Provider will be
                      conducted using secure transfer methods
                    </li>
                  </ul>
                  <h4>
                    <i className="fas fa-check-circle text-secoundry fs-xl  mr-1 me-3" />{" "}
                    Service Provider Access to Client Systems:
                  </h4>
                  <ul>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      Client login credentials may be provided to Service
                      Provider for access to secured on-site computer equipment
                      solely for scheduled troubleshooting, maintenance, or
                      updates related to software provided by Service Provider
                      and installed on Client-owned computer equipment. In such
                      cases, Client will furnish Service Provider with the
                      necessary credentials for local login or through a secure
                      Virtual Private Network (VPN), if required.
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      All activities conducted by Service Provider while
                      connected to Client computing equipment will be subject to
                      monitoring by Client staff and verification by the
                      respective Client Department or Division that requested
                      the access
                    </li>
                    <li>
                      <i className=" fa fa-info-circle mr-1 text-success" />
                      Service Provider, as a condition of accessing Client
                      computing equipment, assures that it will only access the
                      essential system(s) and will not engage in any unlawful
                      activities using the provided equipment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    Data Breach Notification
                  </h3>
                </div>
                <br />
                <p>
                  In the event that the Service Provider becomes aware of any
                  unauthorized access, disclosure, or acquisition of Client Data
                  that contravenes the terms of this Agreement or the Contract,
                  the Service Provider will make every reasonable effort to
                  promptly inform the Client of such a Data Breach within one
                  business day. Additionally, the Service Provider will
                  immediately take appropriate actions to safeguard forensic
                  evidence and rectify the root cause of the Data Breach.
                  Rectifying the Data Breach will be the Service Provider's
                  utmost priority, and the necessary resources will be allocated
                  to achieve this objective. The Service Provider will furnish
                  the Client with all essential information to facilitate a
                  comprehensive understanding of the nature and extent of the
                  Data Breach..
                </p>
                <br />
                <p>
                  If applicable laws mandate it, the Service Provider will
                  notify affected parties of the Data Breach and provide credit
                  monitoring services. Upon request, the Service Provider will
                  also disclose the actions taken or planned to mitigate the
                  adverse effects of unauthorized access, disclosure, or use of
                  Client Data. If the Data Breach necessitates assistance from
                  the Service Provider in reinstalling software, such assistance
                  will be provided to the Client at no cost. The Client retains
                  the discretion to discontinue any services or products
                  provided by the Service Provider until it is satisfied that
                  the cause of the Data Breach has been adequately addressed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    No Surreptitious Code
                  </h3>
                </div>
                <br />
                <p>
                  Service Provider warrants that, to the best of its knowledge,
                  the System is free of and does not contain any code or
                  mechanism that collects personal information or asserts
                  control of the System without Client’s consent, or which may
                  restrict Client’s access to or use of Client Data. Service
                  Provider further warrants that it will not knowingly
                  introduce, via any means, spyware, adware, ransomware,
                  rootkit, keylogger, virus, trojan, worm, or other code or
                  mechanism designed to permit unauthorized access to Client
                  Data, or which may restrict Client’s access to or use of
                  Client Data
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    Compelled Disclosure
                  </h3>
                </div>
                <br />
                <p>
                  If Service Provider is served with any subpoena, discovery
                  request, court order, or other legal request or command that
                  calls for disclosure of any Client Data, Service Provider
                  shall promptly notify the Client in writing and provide the
                  Client sufficient time to obtain a court order or take any
                  other action the Client deems necessary to prevent disclosure
                  or otherwise protect Client Data. In such event, Service
                  Provider shall provide Client prompt and full assistance in
                  Client’s efforts to protect Client Data. Where Service
                  Provider is prohibited by law from notifying the Client of a
                  legal request for Client Data, Service Provider will comply
                  with all applicable laws and regulations with respect to the
                  requested Client Data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="unique-title">
          <h3 className="terms-subheading mt-0 heading--h5" id="headtitle">
            Termination Process
          </h3>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <p>
                  Upon the expiration or termination of the Contract, the
                  Service Provider will ensure that no Data Breach occurs and
                  will comply with the Client's instructions regarding the
                  preservation, transfer, or destruction of Client Data.
                  Industry-standard methods of destruction, such as "purging" or
                  "physical destruction," will be employed. Upon request, the
                  Service Provider will furnish the Client with written
                  certification of the completion of data return or destruction.
                  Prior to such return or destruction, Client Data will continue
                  to be protected in accordance with the terms of this
                  Agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    Survival And Precedence
                  </h3>
                </div>
                <br />
                <p>
                  This Agreement will remain in effect even after the expiration
                  or earlier termination of the Contract. However, either party
                  may terminate this Agreement upon the expiration or
                  termination of the Contract. In the event of any conflict
                  between the provisions of this Agreement and those of the
                  Contract, Service Provider's warranties, support contract, or
                  service level agreement, the provisions of this Agreement
                  shall take precedence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                id="overview"
                className="legal-content-section legal-overview">
                <div className="unique-title">
                  <h3
                    className="terms-subheading mt-0 heading--h5"
                    id="headtitle">
                    Definitions
                  </h3>
                </div>
                <b>
                  <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />{" "}
                  Client Data:
                </b>
                <p>
                  {" "}
                  Refers to all data disclosed by the Client to the Service
                  Provider. For the purposes of this Agreement, Client Data
                  remains as such even if it is transmitted or transferred
                  beyond the immediate possession, custody, or control of the
                  Client.
                </p>
                <b>
                  <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                  Data Breach:
                </b>
                <p>
                  Denotes the unauthorized access and acquisition of
                  computerized data that significantly compromises the security
                  or confidentiality of confidential or sensitive personal
                  information stored by the Client as part of a database
                  containing personal information about multiple individuals.
                  Such a breach is believed to have caused or is reasonably
                  expected to cause loss or harm to any constituent of the
                  Client.
                </p>
                <b>
                  <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                  System:
                </b>
                <p>
                  {" "}
                  Comprises a collection of components that support an
                  operational function or achieve a specific objective. This may
                  encompass various information resources such as networks,
                  servers, computers, software, applications, operating systems,
                  or storage devices, organized for the purpose of collecting,
                  processing, maintaining, using, sharing, disseminating, or
                  disposing of information.
                </p>
                <b>
                  <i className="fas fa-check-circle text-success fs-xl  mr-1 me-3" />
                  Change Management:
                </b>
                <p>
                  A formal process employed to ensure controlled and coordinated
                  introduction of changes to a system, reducing the likelihood
                  of unnecessary modifications, introduction of faults or
                  vulnerabilities, or undoing changes made by other users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
