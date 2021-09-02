import React from "react";
import { Fragment } from "react";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

import Header from "./Header";
import Footer from "./Footer";

import "../css/events.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import eventhero from "../assets/images/events-hero.svg";

const findCurrentPool = (loc) => {
  let i = 1;
  let j = 0;
  while (i <= loc) {
    i = i + 4;
    j++;
  }
  return j;
};

const eventsListInfo = [
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
  // {
  //     title:'CodeBuddy Coding Event',
  //     description:'Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months'
  // },
];

const EventsCard = ({ eventLoc, pageNumber, title, description, index }) => {
  const eventLocActual = eventLoc;
  const evClass = eventLocActual % 4 === 0 ? 4 : eventLocActual % 4;
  const left =
    eventLoc % 4 === 1
      ? window.innerWidth * 0.1 +
        (eventLocActual - 1) * window.innerWidth * 0.2 +
        pageNumber * window.innerWidth * 0.2
      : window.innerWidth * 0.1 +
        (eventLocActual - 1) * window.innerWidth * 0.2 +
        pageNumber * window.innerWidth * 0.2;
  const opacityVal = findCurrentPool(eventLoc) === pageNumber + 1 ? 1 : 0;
  const color =
    eventLoc % 4 === 1
      ? "#2970E6"
      : eventLoc % 4 === 2
      ? "#F4B400"
      : eventLoc % 4 === 3
      ? "#0F9D58"
      : "#594DD2";

  return (
    <Link to={`/event/${index}`}>
      <div
        className={`events-card ev-${evClass}`}
        style={{ left, opacity: opacityVal }}
      >
        <div
          className="circle"
          style={{ display: eventLocActual % 2 ? "none" : "flex" }}
        ></div>

        <p
          className="t1 tanText ta-center curved-ul"
          style={{ marginBottom: 10, letterSpacing: 1.5, borderColor: color }}
        >
          {title}
        </p>
        <p className="t2 darkGrey ta-center">{description}</p>
        <p className="t2 ta-center" style={{ color, cursor: "pointer" }}>
          read more
        </p>

        <div
          className="circle"
          style={{ display: eventLocActual % 2 ? "flex" : "none" }}
        ></div>

        <div className="t3 darkGrey event-date">26 dec 2020</div>
      </div>
    </Link>
  );
};

const EventsCardMobile = ({
  eventLoc,
  pageNumber,
  title,
  description,
  index,
}) => {
  return (
    <Link to={`/event/${index}`}>
      <div className={`events-card-mobile`}>
        <div className="circle-mobile"></div>

        <div
          className="t3 darkGrey event-date"
          style={{ textTransform: "uppercase", marginBottom: 10 }}
        >
          26 dec 2020
        </div>

        <p
          className="h6 tanText ta-left"
          style={{ marginBottom: 10, letterSpacing: 1.5 }}
        >
          {title}
        </p>
        <p className="t2 darkGrey ta-left">{description}</p>
        <p className="t2 ta-left" style={{ color: "var(--googleBlue)" }}>
          read more
        </p>

        {/* <div className="circle" style={{display:eventLocActual%2 ? 'flex' : 'none'}}></div> */}
      </div>
    </Link>
  );
};

class EventsTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      pageNumber: 0,
    };
  }

  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  goToNext = () => {
    if (this.state.pageNumber > findCurrentPool(eventsListInfo.length)) return;
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  goToPrev = () => {
    if (this.state.pageNumber === 0) return;
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  render() {
    return (
      <Fragment>
        <Header
          showLogoInHeader={true}
          passHeaderHeight={(height) =>
            this.setState({ headerHeight: height + 20 })
          }
        />

        <div className="events-hero">
          <div
            className="home-main-content-inner"
            style={{ paddingTop: isMobile ? 10 : 40 }}
          >
            <div className="home-main-content-text">
              <div className="home-main-content-logo-box">
                {/* <img src={DSCLogo} className="dsc-only-logo"/>
                                <img src={DSCLogoText} className="dsc-only-text"/> */}
              </div>

              <p className="h4 darkText ta-center">
                At GDSC PVGCOET, events <br /> are kind of a big deal
              </p>

              <p
                className="t1 ta-center"
                style={{ marginTop: isMobile ? 20 : "10vh" }}
              >
                Check out the events timeline below to keep yourself updated
                with various programmes we conduct
              </p>
            </div>

            <div className="home-main-content-image">
              <img
                src={eventhero}
                style={{
                  width: isMobile ? "80%" : "55%",
                  margin: "auto",
                  marginTop: "10%",
                }}
              />
            </div>
          </div>
        </div>

        <BrowserView>
          <div
            className="eventstimeline-main-container"
            style={{ paddingTop: isMobile ? 0 : this.state.headerHeight + 0 }}
          >
            <p
              className="t0 darkText ta-center"
              style={{ height: 50, letterSpacing: 2, margin: 0, fontSize: 25 }}
            >
              Events Timeline
            </p>
            <p
              className="t0 darkText ta-center"
              style={{
                height: 50,
                letterSpacing: 2,
                marginTop: "100px",
                fontSize: 35,
              }}
            >
              Coming Soon ! <br />
              Stay tuned !
            </p>

            {/* <div className="timeline-container-outer">
                        <div 
                            className="timeline-container"
                            style={{transform:[`translateX(-${this.state.pageNumber*window.innerWidth}px)`]}}
                        >
                            
                            {
                                eventsListInfo.map((item, index) => {
                                    return <EventsCard eventLoc={index+1} pageNumber={this.state.pageNumber} title={item.title} description={item.description} index={index}/>
                                })
                            }
    
                            <div className="timeline-now circle"><div className="timeline-now-inner"></div></div>
                            <p className="today t3 darkGrey">TODAY</p>

                            
                        </div>
                        
                        <div className="timeline" style={{width:`calc(80vw)`}}></div>
                        <button className="next-button" onClick={this.goToNext} style={{display: this.state.pageNumber+2 > findCurrentPool(eventsListInfo.length) ? 'none' : 'flex'}}><ChevronRight className="tanText" size={25}/></button>
                        <button className="prev-button" onClick={this.goToPrev} style={{display: this.state.pageNumber > 0 ? 'flex' : 'none'}}><ChevronLeft className="tanText" size={25}/></button>
                    </div> */}
          </div>
        </BrowserView>

        <MobileView>
          <p
            className="t2 darkText ta-center"
            style={{
              height: 50,
              letterSpacing: 2,
              margin: 0,
              fontSize: 20,
              marginTop: 50,
            }}
          >
            Events Timeline
          </p>
          <p
            className="t0 darkText ta-center"
            style={{
              height: 50,
              letterSpacing: 2,
              marginTop: "10px",
              marginBottom: "100px",
              fontSize: 25,
            }}
          >
            Coming Soon ! <br />
            Stay tuned !
          </p>

          {/* <p className="t3 darkGrey" style={{margin:'20px 0px 10px 40px'}}>TODAY</p> */}
          {/* <div className="mobile-timeline-container">
     
                        {
                                eventsListInfo.map((item, index) => {
                                    return <EventsCardMobile eventLoc={index+1} pageNumber={this.state.pageNumber} title={item.title} description={item.description} index={index}/>
                                })
                        }

                        <div className="mobile-timeline"></div>

                    </div> */}
        </MobileView>

        <Footer />
      </Fragment>
    );
  }
}

export default EventsTimeline;
