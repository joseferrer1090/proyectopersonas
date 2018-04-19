import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserById } from "./../actions";
import UserDetailCover from "./../components/UserDetailCover";
import UserDetailBody from "./../components/UserDetailBody";

class UserDetail extends Component {
  componentWillMount() {
    console.log(this.props.match.params.userId);
    this.props.getUserById(this.props.match.params.userId);
  }
  render() {
    if (this.props.usersDetail.data) {
      const { name, last_name, messages } = this.props.usersDetail.data;
      console.log(messages);
      return (
        <div>
          <UserDetailCover firstName={name} lastName={last_name} />
          <UserDetailBody messages={messages} />
        </div>
      );
    }
    return <div />;
  }
}

function mapStateToProps(state) {
  return { usersDetail: state.getUserById };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
