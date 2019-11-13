import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    firstName: "Bob",
    lastName: "Johnson"
  };

  render() {
    return (
      <div classNameName="UserProfileWrapper">
        <div
          className="card mb-5"
          style={{ width: "18rem", backgroundColor: "#eeeeee", border: "none" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {this.props.firstName} {this.props.lastName}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Edit profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
