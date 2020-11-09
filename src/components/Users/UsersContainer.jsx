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
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'
import {getUsers} from '../../api/api'




class UsersContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)

    getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.items, response.totalCount);
        this.props.toggleIsFetching(false)
      });
  };

  onPageChanged = (e, value) => {
    this.props.setCurrentPage(value);
    this.props.toggleIsFetching(true)

    getUsers(value, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.items, response.totalCount);
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


export default connect(mapStateToProps, {
  follow,
  unfollow,
  showMore,
  setUsers,
  setCurrentPage,
  toggleIsFetching
})(UsersContainer);
