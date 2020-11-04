import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/reducers/profileReducer";
import {withRouter} from 'react-router-dom'

const usersUrlAPI = "https://social-network.samuraijs.com/api/1.0/profile";
class ProfileContainer extends Component {
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    
    if (!userId) {
      userId = 2
    }

    axios.get(`${usersUrlAPI}/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
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
