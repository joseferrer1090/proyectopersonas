import React, { Component } from "react";
import PropTypes from "prop-types";

class UserDetailCover extends Component {
  constructor(props) {
    super();
    this.state = {
      external:
        "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png"
    };
  }
  render() {
    const styleWidth = {
      width: "200px"
    };
    const styleUserDetailCover = {
      width: "100%",
      height: "40vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#FAFAF4"
    };
    const styleName = {
      textAlign: "center",
      marginLeft: "-220px",
      marginBottom: "-230px"
    };
    const { firstName, lastName } = this.props;
    return (
      <div>
        <div style={styleUserDetailCover}>
          <img
            className="circle responsive-img"
            src={this.state.external}
            alt="UserProfile"
            style={styleWidth}
          />
          <a href="/" style={styleName}>
            <h4>{firstName + " " + lastName}</h4>
          </a>
        </div>
      </div>
    );
  }
}

UserDetailCover.propTypes = {
  firstName: PropTypes.any.isRequired,
  lastName: PropTypes.any.isRequired
};

export default UserDetailCover;
