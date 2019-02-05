import React from "react";
import "./index.css";

class Button extends React.Component {
  render() {
    return (
      <>
        <button className={this.props.theme}>{this.props.text}</button>
      </>
    );
  }
}

export default Button;
