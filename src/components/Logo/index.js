import React from "react";
import "./index.css";

class Logo extends React.Component {
  render() {
    return (
      <>
        <img
          className={this.props.className}
          src={require("../../assets/img/logo.png")}
          alt="logo allocine"
        />
      </>
    );
  }
}

export default Logo;
