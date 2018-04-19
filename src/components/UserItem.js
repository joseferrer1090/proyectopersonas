import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
class UserItem extends Component {
  constructor(props) {
    super();
    this.state = {
      isRedirect: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    //TODO
    this.setState({
      isRedirect: true
    });
  }
  render() {
    const { name, last_name, facebook, id } = this.props;
    if (this.state.isRedirect === true) {
      return <Redirect to={"/detail/" + id} />;
    }
    return (
      <div className="card" onClick={this.onClick}>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="responsive-img"
              src="data:image/jpeg;base64,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"
              alt="Profile"
            />
          </div>
          <div className="UserItem-rightBox">
            <p className="UserItem-name">
              {name} {last_name}
            </p>
            <p className="UserItem-facebook">{facebook}</p>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string
};

export default UserItem;
