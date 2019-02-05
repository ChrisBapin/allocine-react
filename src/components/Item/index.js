import React from "react";

class Item extends React.Component {
  render() {
    return (
      <>
        <div>
          <span className={this.props.className}>{this.props.label}</span>:
          <span className={this.props.className}> {this.props.text}</span>
        </div>
      </>
    );
  }
}

export default Item;
