import React from "react";
import "./index.css";

class Title extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            fontSize: "40px",
            fontFamily: `"Montserrat", serif`,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          {this.props.text}
        </h1>
      </>
    );
  }
}

export default Title;
