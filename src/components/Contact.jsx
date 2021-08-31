import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import "../css/globalStyles.css";
import "../css/contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      valueAttr: "",
      name: "",
      email: "",
      contactNo: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ valueAttr: e.target.value });
  };
  handleClick = () => {
    this.setState({ valueAttr: "" });
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    const url = process.env.REACT_APP_SHEET_URL;
    const data = {
      Name: this.state.name,
      Email: this.state.email,
      "Contact No": this.state.contactNo,
      Message: this.state.valueAttr,
    };
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(data),
      });
      alert("Your response has been submitted! Thank you");
    } catch (e) {
      alert("Sorry something went wrong could not submit your response");
    }
  };

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
                    CONTACT INFO : +91 98225 77069
                  </div>
                </div>
                <div className="screen-body-item">
                  <Input
                    onChange={this.handleInput}
                    name="name"
                    placeholder="NAME"
                  />
                  <Input
                    onChange={this.handleInput}
                    name="email"
                    placeholder="EMAIL"
                  />
                  <Input
                    onChange={this.handleInput}
                    name="contactNo"
                    placeholder="CONTACT NO"
                  />
                  <div className="app-form-group message">
                    <textarea
                      value={this.state.valueAttr}
                      onChange={this.handleChange}
                      className="app-form-control"
                      rows="6"
                      placeholder="MESSAGE"
                    ></textarea>
                  </div>
                  <div class="app-form-group buttons">
                    <button
                      onClick={this.handleClick}
                      className="app-form-button"
                    >
                      CANCEL
                    </button>
                    <button
                      onClick={this.handleSubmit}
                      className="app-form-button"
                    >
                      SEND
                    </button>
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
