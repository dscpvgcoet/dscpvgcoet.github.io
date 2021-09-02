import React from "react";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

import Header from "./Header";
import Footer from "./Footer";
import { DSCLeadInformation, teamInformation } from "../teamInformation";
import team from "../assets/images/team.jpg";
import teamInfo from "../teamInfo.json";

import "../css/our-team.css";
import { GitHub, Link2, Linkedin, Mail } from "react-feather";

class OurTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
    };
  }

  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  renderCoreTeam = (start, end) => {
    const { core } = teamInfo;
    return core.slice(start, end).map((member) => {
      return member ? (
        <div className="core-member-box">
          <div className="core-member-photo">
            <img src={member.imageUrl.replace("open?", "uc?")} />
          </div>
          <p
            className="h5 tanText ta-center"
            style={{ fontFamily: "Google Sans Regular", marginBottom: 10 }}
          >
            {member.fullName}
          </p>
          <p className="t2 darkGrey ta-center">{member.role}</p>
          <div className="socials">
            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Mail size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.githubLink ? (
              <a
                href={member.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <GitHub size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.linkedinProfile ? (
              <a
                href={member.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Linkedin size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.personalWebsite ? (
              <a
                href={member.personalWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Link2 size={15} color="white" />
                </div>
              </a>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="core-member-box"></div>
      );
    });
  };

  renderCompleteTeam = (start, end) => {
    const { complete } = teamInfo;
    return complete.slice(start, end).map((member) => {
      return member ? (
        <div className="core-member-box">
          <div className="core-member-photo randomize">
            <img src={member.imageUrl.replace("open?", "uc?")} />
          </div>
          <p
            className="h5 tanText ta-center"
            style={{ fontFamily: "Google Sans Regular", marginBottom: 10 }}
          >
            {member.fullName}
          </p>
          <p className="t2 darkGrey ta-center">{member.role}</p>
          <div className="socials">
            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Mail size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.githubLink ? (
              <a
                href={member.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <GitHub size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.linkedinProfile ? (
              <a
                href={member.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Linkedin size={15} color="white" />
                </div>
              </a>
            ) : null}

            {member.personalWebsite ? (
              <a
                href={member.personalWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social">
                  <Link2 size={15} color="white" />
                </div>
              </a>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="core-member-box"></div>
      );
    });
  };

  render() {
    return (
      <div>
        <Header
          showLogoInHeader={true}
          passHeaderHeight={(height) => this.setState({ headerHeight: height })}
        />
        <div
          className="team-main-container"
          style={{ paddingTop: isMobile ? 100 : this.state.headerHeight + 100 }}
        >
          <div className="left-side">
            <p className="h3 darkText">Our Team</p>
            <p className="t1 darkGrey">
              Presenting our passionate team for Google Developer Students Club
              PVGCOET 2020-2021
            </p>
          </div>
        </div>
        <div className="team-members-core">
          <p className="team-title h5 tanText ta-center">Core Team</p>
          <div className="team-members-core-inner">
            {this.renderCoreTeam(0, 4)}
          </div>
          <div className="team-members-core-inner">
            {this.renderCoreTeam(4, 8)}
          </div>
          <p className="team-title h5 tanText ta-center">Complete Team</p>
          <BrowserView>
            <div className="team-members-core-inner">
              {this.renderCompleteTeam(0, 4)}
            </div>
            <div className="team-members-core-inner">
              {this.renderCompleteTeam(4, 8)}
            </div>
            <div className="team-members-core-inner">
              {this.renderCompleteTeam(8, 12)}
            </div>
          </BrowserView>
          <MobileView>
            <div className="team-members-core-inner-mobile">
              {this.renderCompleteTeam(0, 6)}
            </div>
            <div className="team-members-core-inner-mobile">
              {this.renderCompleteTeam(6, 12)}
            </div>
            <div className="team-members-core-inner-mobile">
              {this.renderCompleteTeam(12, 18)}
            </div>
            <div className="team-members-core-inner-mobile">
              {this.renderCompleteTeam(18, 24)}
            </div>
          </MobileView>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OurTeam;
