import { connect } from "react-redux";
import {
  follow,
  unfollow,
  showMore,
  setUsers,
  setCurrentPage,
  toggleIsFetching
} from "../../redux/reducers/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'


const usersUrlAPI = "https://social-network.samuraijs.com/api/1.0/users";

class UsersContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)

    axios
      .get(
        `${usersUrlAPI}?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleIsFetching(false)
      });
  };

  onPageChanged = (e, value) => {
    this.props.setCurrentPage(value);
    this.props.toggleIsFetching(true)

    axios
      .get(`${usersUrlAPI}?page=${value}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleIsFetching(false)
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> :
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     showMore: () => {
//       dispatch(showMore());
//     },
//     setUsers: (users, totalUsersCount) => {
//       return dispatch(setUsersAC(users, totalUsersCount));
//     },
//     setCurrentPage: (currentPage) => {
//       return dispatch(setCurrentPageAC(currentPage));
//     },
//     toggleIsFetching: (fetching) => {
//       return dispatch(toggleIsFetchingAC(fetching))
//     }
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  showMore,
  setUsers,
  setCurrentPage,
  toggleIsFetching
})(UsersContainer);
