import React from "react";
import "./index.css";

class Subtitle extends React.Component {
  render() {
    return (
      <>
        <h2 className="h2">{this.props.text}</h2>
      </>
    );
  }
}

export default Subtitle;
