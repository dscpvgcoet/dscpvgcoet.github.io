import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import "../css/globalStyles.css";
import "../css/contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
    };
  }

  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  render() {
    return (
      <div>
        <Header
          showLogoInHeader={true}
          passHeaderHeight={(height) => this.setState({ headerHeight: height })}
        />
        <div className="contact-main">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="form-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : +91 90213 93816
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      rows="6"
                      placeholder="MESSAGE"
                    ></textarea>
                  </div>
                  <div class="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
