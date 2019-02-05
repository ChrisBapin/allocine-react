import React from "react";
import "./index.css";

class Description extends React.Component {
  render() {
    return (
      <>
        <div className="desc--container">
          <p>{this.props.text}</p>
        </div>
      </>
    );
  }
}

export default Description;
