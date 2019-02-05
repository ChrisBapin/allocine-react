import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className={this.props.className}>
          <Logo />
        </header>
      </>
    );
  }
}

export default Header;
