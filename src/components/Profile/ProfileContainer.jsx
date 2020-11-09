import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/reducers/profileReducer";
import {withRouter} from 'react-router-dom'
import { getProfile } from "../../api/api";

class ProfileContainer extends Component {
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    
    if (!userId) {
      userId = 2
    }

    getProfile(userId)
    .then((response) => {
      this.props.setUserProfile(response);
    });
  }
  

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const WithUrlRouteContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  
});
export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlRouteContainerComponent);
