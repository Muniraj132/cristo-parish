import React from "react";

function Sacramental() {
  return (
    <>
      <div className="container mt-4 sacrementdiv">
        <h2 className="text-center mb-2">Sacramental Register</h2>
        <div className="Blurbs__blurb-wrapper spacebetween">
          <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
            <div className="Blurbs__blurb-inner">
              <figure className="Blurbs__image"></figure>
              <h4 className="Blurbs__blurb-heading">
                Quickly locate registry entries and preserve your valuable
                records.
              </h4>

              <div
                className="Blurbs__blurb-content"
                style={{ paddingLeft: 13 }}>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    PmS Sacramental Register provides a searchable electronic
                    database of all your sacramental records, making it easy for
                    you to quickly locate entries in your written registers and
                    helping to preserve your valuable records.{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
            <div className="Blurbs__blurb-inner">
              <figure className="Blurbs__image"></figure>
              <h4 className="Blurbs__blurb-heading">
                Preserve valuable sacramental records.
              </h4>

              <div
                className="Blurbs__blurb-content"
                style={{ paddingLeft: 13 }}>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    PmS Sacramental Register allows you to store and display
                    Baptism, Confirmation, First Communion, Marriage, and Death
                    records in a format similar to your physical registers,
                    reducing unnecessary handling and deterioration of your
                    older physical volumes.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
            <div className="Blurbs__blurb-inner">
              <figure className="Blurbs__image"></figure>
              <h4 className="Blurbs__blurb-heading">
                Spend less time searching for records.
              </h4>

              <div
                className="Blurbs__blurb-content"
                style={{ paddingLeft: 13 }}>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    PmS Sacramental Register saves time by allowing you to
                    search on a variety of information to quickly find the exact
                    volume and page number of an entry in your physical
                    register. Filtering makes it easier to search on many
                    options including name, sacrament date, birth date, maiden
                    names, and more.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="Blurbs__blurb Blurbs__blurb--card Blurbs__blurb--2">
            <div className="Blurbs__blurb-inner">
              <figure className="Blurbs__image"></figure>
              <h4 className="Blurbs__blurb-heading">
                Automatically update your database.
              </h4>

              <div
                className="Blurbs__blurb-content"
                style={{ paddingLeft: 13 }}>
                <p>
                  <span style={{ fontWeight: 300 }}>
                    The first time you access PmS Sacramental Registry, it will
                    search for all existing sacrament entries in your PmS Office
                    programs and copy them into the permanent Sacramental
                    Register database. As you enter new sacramental information,
                    the register automatically updates and reflects these
                    changes, saving you time and reducing the chance for errors.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sacramental;
