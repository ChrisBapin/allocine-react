import React from "react";
import "./index.css";

class Item extends React.Component {
  render() {
    return (
      <>
        <div className="item--container">
          <span className={this.props.className}>{this.props.label}</span>
          <span className={this.props.className}> {this.props.text}</span>
        </div>
      </>
    );
  }
}

export default Item;
