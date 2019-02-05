import React from "react";
import "./index.css";

class Title extends React.Component {
  render() {
    return (
      <>
        <h1 className="h1">{this.props.text}</h1>
      </>
    );
  }
}

export default Title;
