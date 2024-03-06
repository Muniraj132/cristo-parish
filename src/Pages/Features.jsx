import React from "react";
import "./css/features.css";
import ReactImageGallery from "react-image-gallery";
import { useState } from "react";
import { Link } from "react-router-dom";
const Features = () => {
  const currentUrl = window.location.pathname;
  const [showGallery, setShowGallery] = useState(false);
  const menuItems = [
    {
      title: "Parish Dashboard",
      imgSrc: "/assets/img/module/dashboard.png",
      href: "/dashboard",
    },
    {
      title: "Families",
      imgSrc: "/assets/img/module/family.png",
      href: "/families",
    },
    {
      title: "Members",
      imgSrc: "/assets/img/module/members.png",
      href: "/members",
    },
    {
      title: "Basic Christian Communities",
      imgSrc: "/assets/img/module/bbc.png",
      href: "/basic-christian-communities",
    },
    {
      title: "Baptism",
      imgSrc: "/assets/img/module/Baptism.png",
      href: "/baptism",
    },
    {
      title: "Communion",
      imgSrc: "/assets/img/module/communion.webp",
      href: "/holy-communion",
    },
    {
      title: "Confirmation",
      imgSrc: "/assets/img/module/confirmation.png",
      href: "/confirmation",
    },
    {
      title: "Marriage",
      imgSrc: "/assets/img/module/marriage.png",
      href: "/marriage",
    },
    {
      title: "Death",
      imgSrc: "/assets/img/module/death1.webp",
      href: "/death",
    },
    {
      title: "Commission",
      imgSrc: "/assets/img/module/Donations.png",
      href: "/commission",
    },
    {
      title: "Associations",
      imgSrc: "/assets/img/module/Associations.png",
      href: "/association",
    },
    {
      title: "Prayer Request",
      imgSrc: "/assets/img/module/prayer.png",
      href: "/parish-prayer",
    },
    {
      title: "Liturgical Calendar",
      imgSrc: "/assets/img/module/Liturgical.png",
      href: "/parish-liturgicalcalendar",
    },
    {
      title: "Donations",
      imgSrc: "/assets/img/module/Payroll.png",
      href: "/parish-donations",
    },
    {
      title: "Subscription",
      imgSrc: "/assets/img/module/Subscription.png",
      href: "/parish-subscription",
    },
    {
      title: "Parish Calendar",
      imgSrc: "/assets/img/module/Calendar.png",
      href: "/parish-calendar",
    },
    {
      title: "Scheduled SMS",
      imgSrc: "/assets/img/module/sms.png",
      href: "/parish-scheduledsms",
    },
  ];
  const blurbsData = [
    {
      title: "Parish Dashboard",
      imgSrc: "/assets/img/module/parish-2.png",
      href: "/dashboard",
      description:
        "A Parish Priest can view information about his own parish. And view the total number of families, total number of BCCs, total number of members, total number of Council, Commission and Associations available in the parish. And also you can able to view the Parish History, Pastoral History, Commissions, Councils, Association, Cemetery details and Prayers details.",
    },
    {
      title: "Families",
      imgSrc: "/assets/img/module/family-d.png",
      href: "/families",
      description:
        "Maintaining all the catholic familie’s information living in a Province. Provision to view and generate family card and family profile in pdf format and able to add total number of family members and view subscription amount paid by the family.",
    },
    {
      title: "Members",
      imgSrc: "/assets/img/module/member.png",
      href: "/members",
      description:
        "Maintaining all the family member’s bio-data such as Sacraments details, education details and Qualification details. Able to generate various reports on member’s information like Requesting Letter, Secular Profile and Christian Profile. Requesting Letter - Secular Profile – reports on member’s education details.  Christian Profile – reports on member’s religious details.",
    },
    {
      title: "Basic Christian Communities",
      imgSrc: "/assets/img/module/bcc-d.png",
      href: "/basic-christian-communities",
      description:
        "Basic Christian Community is the associated group organized by the parish people. Each community is being allotted some liturgical events, offerings and subscriptions to be organized. This feature lets you to maintain all the BCC’s available in parish.",
    },
    {
      title: "Baptism",
      imgSrc: "/assets/img/module/baptism-d.png",
      href: "/baptism",
      description:
        "Baptism is a holy sacrament, sprinkling of holy water on to a person’s forehead, purifying, and admission to the Christian Church. Baptism is performed for the young children with naming ceremony in group of people. Provision is enabled to register the baptism information of children in parish and total number of baptized members count is viewed..",
    },
    {
      title: "Holy Communion",
      imgSrc: "/assets/img/module/HolyCommunion.png",
      href: "/holy-communion",
      description:
        "First Holy Communion is an important ceremony for Catholic families and individuals. Communion ceremony is given to the children who are above the age of 10. This feature eases you to maintain the children details who have got the first Holy Communion in the parish. Allowed to register the First Holy Communion details of the member and able to view the total count of members who are received communion.",
    },
    {
      title: "Confirmation",
      imgSrc: "/assets/img/module/Confirmationd.png",
      href: "/confirmation",
      description:
        "Christian Community gives a rite to the person on which the sacraments for confirming and strengthening the recipient in Christian faith. The confirmation is given for the children after having Baptism and First Holy Communion. This feature lets the user to maintain the confirmation details in the parish. Allowed to register the confirmation details of the members. Total number of member details is displayed..",
    },
    {
      title: "Marriage",
      imgSrc: "/assets/img/module/Marriaged.png",
      href: "/marriage",
      description:
        "Marriage is union between individual people. Marriage feature is maintaining the marriage ceremony details which have been happening in the parish. It also displays the member total count of married at the parish level.",
    },
    {
      title: "Death",
      imgSrc: "/assets/img/module/Deathd.png",
      href: "/death",
      description:
        "Death sacrament registered if the person status is not alive. Death feature helps you to maintain the death details in the parish. If any catholic person dies in the parish, this feature eases you to maintain the details and generate death report if it is necessary. Allowed to register the person details died in the parish.",
    },
    {
      title: "Commission",
      imgSrc: "/assets/img/module/Confirmationd.png",
      href: "/commission",
      description:
        "Commissions are the groups created for the welfare of parishioners, created by the own diocese. It displays the name of the commission and total number of members who are part of the commission and improve and motivate the people in the parish.",
    },
    {
      title: "Associations",
      imgSrc: "/assets/img/module/Associationd.png",
      href: "/association",
      description:
        "Association is a group of people formed in a parish having common responsibilities to do in the parish. This feature helps you to maintain the member’s details associated in the association group. Total number of Association is displayed.",
    },
    {
      title: "Prayer Request",
      imgSrc: "/assets/img/module/PrayerRequest.png",
      href: "/parish-prayer",
      description:
        "Prayer Request is the event which is given by the parishioners. It allows the family member to make a prayer request and allows the parish priest to view the details. It allows to make a prayer request.",
    },
    {
      title: "Liturgical Calendar",
      imgSrc: "/assets/img/module/LiturgicalCalendar.png",
      href: "/parish-liturgicalcalendar",
      description:
        "Liturgical Calendar feature lets parish admin to allocate the events to the communities to be organized like Daily Mass, Sunday Mass, Marriage Mass and Prayer Service. Parish people are allowed to book in advance to organize the mass in the parish. Provision to view the liturgical calendar at the parish.",
    },
    {
      title: "Donations",
      imgSrc: "/assets/img/module/Donationd.png",
      href: "/parish-donations",
      description:
        "Donations are the contribution amounts received from the parishioners or non-parish member towards the maintenance of church related activities. It allows you to create and register the donation details at the parish level..",
    },
    {
      title: "Subscription",
      imgSrc: "/assets/img/module/Associationd.png",
      href: "/parish-subscription",
      description:
        "Subscription feature eases parish admin to maintain the subscription amounts which are paid by the people regularly. Subscription is paid by the people in tow levels: Parish level and Family Level. Allowed to register the subscription amount details collected at the parish level.",
    },
    {
      title: "Parish Calendar",
      imgSrc: "/assets/img/module/LiturgicalCalendar.png",
      href: "/parish-calendar",
      description:
        "Calendar is a feature of organizing days for religious and administrative purpose. It allows you to create a calendar and any user of the CristO application is allowed to add events. You are allowed to create a calendar for each family. Parish calendar displays the events which are defined for the particular day and it also maintains all the organizing event details of the parish.",
    },
    {
      title: "Scheduled SMS",
      imgSrc: "/assets/img/module/smsd.png",
      href: "/parish-scheduledsms",
      description:
        "SMS schedules are loaded which are defined manually in SMS Automation feature. If SMS schedule is set manually, parish admin has to approve to send SMS to the selected recipients. It allows you to view the count of scheduled SMS of the parish.",
    },
  ];

  const currentBlurb = blurbsData.find((blurb) => blurb.href === currentUrl);
  const images = [
    {
      original: currentBlurb?.imgSrc,
      thumbnail: currentBlurb?.imgSrc,
      description: currentBlurb?.title,
    },
  ];
  const openGallery = () => {
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };
  const galleryOptions = {
    showNav: false, // Hide the navigation arrows
    showThumbnails: false, // Hide the thumbnail images
    showPlayButton: false, // Hide the play button
    autoPlay: true, // Automatically start the slideshow
    slideInterval: 5000,
    disableSwipe: true,
    showFullscreenButton: true,
  };
  return (
    <>
      <br />
      <br />
      <br />
      <section className="Menu_Block">
        <h2 className="text-center">{currentBlurb?.title}</h2>
        <div className="container">
          <div className="Menu_Block__items-wrapper">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                className={`Menu_Block__item ${
                  item.href === currentUrl ? "active" : ""
                }`}
                to={item.href}>
                <div className="Menu_Block__icon">
                  <figure className="Menu_Block__image">
                    <img decoding="async" src={item.imgSrc} alt="" />
                  </figure>
                </div>
                <div className="Menu_Block__title">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="Blurbs--light Blurbs--flat Blurbs">
        <div className="container">
          {currentBlurb ? (
            <div>
              <div className="Blurbs__text-wrapper">
                <div className="Blurbs__heading-wrapper">
                  <h3 className="Blurbs__heading font-highlight">
                    {currentBlurb.title}
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 Blurbs__blurb Blurbs__blurb--flat Blurbs__blurb--2">
                  <a
                    className="Blurbs__title"
                    href={currentBlurb.href}
                    target="_blank"
                    rel="noreferrer">
                    <h4
                      className="Blurbs__blurb-heading"
                      style={{ fontSize: "x-large" }}>
                      {currentBlurb.title}
                    </h4>
                  </a>
                  <div>
                    <div
                      className="Blurbs__blurb-content"
                      style={{ fontSize: "19px" }}>
                      <p>{currentBlurb.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 Blurbs__blurb Blurbs__blurb--flat Blurbs__blurb--2 imageformodule"
                  style={{ maxWidth: "46.8%" }}>
                  {showGallery && (
                    <div className="gallery-modal">
                      <div className="gallery-content">
                        <ReactImageGallery items={images} {...galleryOptions} />
                        <button
                          className="gallery-close-button"
                          onClick={closeGallery}>
                          ×
                        </button>
                      </div>
                    </div>
                  )}
                  <div
                    // href={currentBlurb.imgSrc}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title={currentBlurb.title}>
                    <img
                      src={currentBlurb.imgSrc}
                      alt={currentBlurb.title}
                      style={{ width: "100%" }}
                      onClick={openGallery}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              {" "}
              <p>No data available.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
