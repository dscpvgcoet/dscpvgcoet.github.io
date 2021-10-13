import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { isMobile } from "react-device-detect";
import { ChevronLeft } from "react-feather";
import { Link } from "react-router-dom";

import "../css/events.css";
import { Timer } from "../helpers";
import Footer from "./Footer";
import FormDialog from "./Form1";
//import  from "./Form1";
import Header from "./Header";
import { events } from "../EnevtDetailsData";

const EventDetails = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [event, setEvent] = useState({});

  useEffect(() => {
    window.scroll({
      top: 0,
    });
    const fullURL = window.location.href;
    const eventUrl = fullURL.split("/")[fullURL.split("/").length - 1];
    if (events[eventUrl]) {
      setEvent(events[eventUrl]);
      console.log(
        new Date(`${events[eventUrl].dateTime}`).getTime(),
        new Date().getTime()
      );
    }
  }, []);

  return (
    <Fragment>
      <Header
        showLogoInHeader={true}
        passHeaderHeight={(height) => setHeaderHeight(height + 20)}
      />

      <div
        className="event-details-container"
        style={{ paddingTop: isMobile ? 20 : headerHeight }}
      >
        <p className="t2 darkGrey ta-left go-back" style={{ margin: "20px 0" }}>
          <Link to="/events">
            <ChevronLeft className="darkGrey" size={24} />
            back to timeline
          </Link>
        </p>

        <div className="top-headings">
          <p
            className="h3 darkText ta-center"
            style={{ margin: isMobile ? "50px 20px" : 50 }}
          >
            {event.name}
          </p>
          <p className="t2 tanText ta-center">organised by GDSC PVGCOET</p>
          <p className="t2 darkGrey ta-center">{event.date}</p>

          <div className="registration-box">
            <p
              className="h5 white ta-center"
              style={{ letterSpacing: 1.2, fontWeight: 400 }}
            >
              Event Registration
            </p>

            <p
              className="t2 ta-center white"
              style={{ marginTop: isMobile ? 5 : 30 }}
            >
              event begins in
              {/* event had expired */}
            </p>
            <Timer startDate={new Date(event.start).getTime()} />

            <p
              className="t1 ta-center white"
              style={{ marginTop: isMobile ? 5 : 30 }}
            >
              {event.date}
            </p>
            <p className="t3 ta-center white" style={{ marginTop: 10 }}>
              VIRTUAL GOOGLE MEET
            </p>
            <p
              className="t3 ta-center white"
              style={{ marginTop: 40, display: isMobile ? "none" : "" }}
            >
              {event.post_event_desc}
            </p>
            {/* {new Date(`${event.dateTime}`).getTime() < new Date().getTime() && <FormDialog className="primary-button" />} */}
          </div>

          <div className="featured-media">
            <img className="poster-image" alt="poster" src={event.image} />
          </div>

          <div className="event-content">
            <p className="t2 darkGrey">{event.description}</p>
          </div>
        </div>

        {/* <p className="h4 darkText ta-center" style={{ margin: "50px auto" }}>
          Image gallery
        </p> */}
      </div>

      <Footer />
    </Fragment>
  );
};

export default EventDetails;
