import React from "react";
import Header from "./Header";
import axios from "axios";
import { setUserData } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";

const usersUrlAPI = "https://social-network.samuraijs.com/api/1.0/auth/me";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`${usersUrlAPI}`, { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        console.log(response.data.data);
        const {id, email, login} = response.data.data
        this.props.setUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
