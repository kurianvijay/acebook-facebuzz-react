import React, { Component } from "react";
import SignupForm from "./SignupForm";
import UserProfile from "./UserProfile";

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <UserProfile
          firstName={this.props.user.firstName}
          lastName={this.props.user.lastName}
        />
      )
    } else {
      return (
        <SignupForm handleSignUp={this.props.handleSignUp} />
      )
    }
  }
}

export default Sidebar;
