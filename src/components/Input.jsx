import React from "react";

import "../css/globalStyles.css";
import "../css/contact.css";

class Input extends React.Component {
  render() {
    return (
      <div className="app-form-group">
        <input
          className="app-form-control"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
