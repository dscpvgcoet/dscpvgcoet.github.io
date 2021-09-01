import React from "react";
import { Link } from "react-router-dom";

import "../css/footer.css";
import googleLogo from "../assets/images/icons/google.png";
import instagramLogo from "../assets/images/icons/instagram.png";
import twitterLogo from "../assets/images/icons/twitter.png";
import linkedinLogo from "../assets/images/icons/linkedin.png";
import youtubeLogo from "../assets/images/icons/youtube.png";
import mail from "../assets/images/icons/mail.png";
import phone from "../assets/images/icons/phone.png";
import location from "../assets/images/icons/pin.png";
import DSCdarkLogo from "../assets/images/DSC PVGCOET Dark Vertical-Logo.png";
import { Fragment } from "react";
import { Mail, Map, Phone } from "react-feather";

const socialMediaInfo = [
  {
    image: googleLogo,
    href: "https://dsc.community.dev/pune-vidyarthi-grihas-college-of-engineering-and-technology-pune/",
  },
  {
    image: instagramLogo,
    href: "https://instagram.com/dscpvgcoet",
  },
  {
    image: linkedinLogo,
    href: "https://www.linkedin.com/company/gdscpvgcoet",
  },
  {
    image: twitterLogo,
    href: "https://twitter.com/dscpvgcoet",
  },
  {
    image: youtubeLogo,
    href: "https://www.youtube.com/channel/UCZ3fJ0kM7K1UBIxSPjF-qrA",
  },
];

class Footer extends React.Component {
  renderSocialMediaIcons = () => {
    return socialMediaInfo.map((item) => {
      return (
        <a href={item.href} target="_blank">
          <div className="social-media-icons-card">
            <img src={item.image} className="social-media-icons-image" />
          </div>
        </a>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#2970E6"
            fill-opacity="1"
            d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,165.3C840,171,960,149,1080,128C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="footer-main">
          <div className="two-sections">
            <div className="two-sections-text">
              <p className="h4 darkText">Get inside the hustle.</p>
              <p className="h4" style={{ color: "#1a1a1a" }}>
                Join the community.
              </p>
            </div>
            <div className="social-media-icons">
              {this.renderSocialMediaIcons()}
            </div>
          </div>

          {/* <div className="h-separator"></div> */}

          <div className="three-sections">
            {/* <div className="section footer-logo-box">
            <img src={DSCdarkLogo} alt="DSC-dark-Logo" />
          </div>
           */}

            {/* <div className="section explore-links">
            
            
            
            <ul>
              
              <li>
                <Link to="/team" className="link">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/events" className="link">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  Archives
                </Link>
              </li>
            </ul>
          </div> */}

            <div className="section section-icons">
              <span>
                <Mail className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  <a
                    className="footer-link"
                    href="mailto:dscpvgcoet@pvgcoet.ac.in"
                    target="_blank"
                  >
                    dscpvgcoet@pvgcoet.ac.in
                  </a>
                </p>
              </span>

              <span>
                <Phone className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  +91 98225 77069
                </p>
              </span>

              <span>
                <Map className="white" size={20} />
                <p
                  style={{ textAlign: "left", marginLeft: 20 }}
                  className="t2 white"
                >
                  <a
                    className="footer-link"
                    href="https://goo.gl/maps/8ExcK48y1z6F4ykG6"
                    target="_blank"
                  >
                    PVG's COET, Sahakarnagar, Pune
                  </a>
                </p>
              </span>
            </div>

            <div className="newsletter-section">
              {/* <p className="t2 white ta-right">
                Get notified with latest news by subscribing <br /> to the
                monthly{" "}
                <span style={{ color: "#1a1a1a", fontWeight: 800 }}>
                  {" "}
                  GDSC PVGCOET Newsletter{" "}
                </span>
              </p>
              <div className="newsletter-container">
                <input type="text" placeholder="johndoe@email.com" />
                <div
                  className="secondary-button"
                  style={{ margin: "0px 0px 0 20px", height: 45 }}
                >
                  <p className="t2 white ta-center">Subscribe</p>
                </div>
              </div> */}
              <p className="t2 white ta-right">
                <span style={{ color: "#1a1a1a", fontWeight: 800 }}>
                  {" "}
                  GDSC PVGCOET Newsletter
                </span>
                &nbsp; Coming Soon!
              </p>
            </div>
          </div>

          {/* <p className="t2 white ta-center">Designed by Yatish Kelkar</p>
        <p className="t2 white ta-center">Developed by Yatish Kelkar and Rohit Dalvi</p> */}
        </div>
      </Fragment>
    );
  }
}

export default Footer;
