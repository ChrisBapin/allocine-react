import React from "react";
import Logo from "../Logo";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className={this.props.className}>
          <div className="container">
            <Logo imgClass="logo" />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
