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

const socialMediaInfo = [
  {
    image: googleLogo,
    href:
      "https://dsc.community.dev/pune-vidyarthi-grihas-college-of-engineering-and-technology-pune/",
  },
  {
    image: instagramLogo,
    href: "https://instagram.com/dscpvgcoet",
  },
  {
    image: linkedinLogo,
    href: "https://www.linkedin.com/company/dscpvgcoet",
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
      <div className="footer-main">
        <div className="two-sections">
          <div className="two-sections-text">
            <p className="h3 darkText">Get inside the hustle.</p>
            <p className="h3">Join the community.</p>
          </div>
          <div className="social-media-icons">
            {this.renderSocialMediaIcons()}
          </div>
        </div>
        <div className="h-separator"></div>
        {/* <div className="footer-text">
                <h2>We are based in Delhi, India</h2>
                <p>We work with clients all over the world. Get in touch with us</p>
            </div> */}

        <div className="three-sections">
          <div className="section footer-logo-box">
            <img src={DSCdarkLogo} alt="DSC-dark-Logo" />
          </div>
          {/* <div className="separator"></div> */}
          <div className="section explore-links">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              {/* <li><Link to="/blogs" className="link">Blogs</Link></li> */}
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
          </div>
          <div className="section section-icons">
            <h3>Collaborate with us</h3>
            <span>
              <img src={mail} />
              <p style={{ textAlign: "left" }}>
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
              <img src={phone} />
              <p style={{ textAlign: "left" }}>+91 90213 93816</p>
            </span>
            <span>
              <img src={location} />
              <p style={{ textAlign: "left" }}>
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
        </div>
      </div>
    );
  }
}

export default Footer;
