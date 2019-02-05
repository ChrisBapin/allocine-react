import React from "react";

class Subtitle extends React.Component {
  render() {
    return (
      <>
        <h2
          style={{
            margin: "10px 0",
          }}
        >
          {this.props.text}
        </h2>
      </>
    );
  }
}

export default Subtitle;
