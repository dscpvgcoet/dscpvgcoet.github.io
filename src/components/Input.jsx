import React from "react";

import "../css/globalStyles.css";
import "../css/contact.css";

class Input extends React.Component {
  render() {
    return (
      <div className="app-form-group">
        <input
          onChange={this.props.onChange}
          name = {this.props.name}
          className="app-form-control"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
