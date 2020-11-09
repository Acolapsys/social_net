import React from "react";
import Header from "./Header";
import { setUserData } from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { authMe } from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    authMe().then((response) => {
      if (response.resultCode === 0) {
        const {id, email, login} = response.data
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
