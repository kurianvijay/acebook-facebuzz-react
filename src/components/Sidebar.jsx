import React, { Component } from "react";
import SignupForm from "./SignupForm";
import UserProfile from "./UserProfile";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { firstName: "John", lastName: "Doe" }
    };
  }

  render() {
    return (
      <div classNameName="SidebarWrapper">
        <UserProfile
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
        />
        <SignupForm />
      </div>
    );
  }
}

export default Sidebar;
