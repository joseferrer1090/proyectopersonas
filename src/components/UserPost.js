import React, { Component } from "react";
import PropTypes from "prop-types";
class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalImage: "hola"
    };
  }
  render() {
    const { title, message } = this.props;
    const externalImage = "https://lorempixel.com/100/190/nature/6";
    return (
      <div>
        <br />
        <div className="row">
          <div className="col s8 offset-s4">
            <div className="card">
              <span className="card-title">{title}</span>
              <div className="card-content">
                <p className="flow-text text-center ">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserPost.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default UserPost;
