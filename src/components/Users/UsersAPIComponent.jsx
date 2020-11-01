import React from "react";
import * as axios from "axios";
import Users from "./Users";

// props.setUsers([
//   { id: 1, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Admin", status: 'On the wave', location: { city: 'Chusovoy', country: 'Russia' } },
//   { id: 2, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Eleonora", status: 'I am stylist', location: { city: 'Chusovoy', country: 'Russia' } },
//   { id: 3, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Dmitry", status: 'Boom Boom', location: { city: 'Moscow', country: 'Russia' } },
//   { id: 4, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Alexey", status: 'Reading manual', location: { city: 'Sochi', country: 'Russia' } },
//   { id: 5, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Sergey", status: 'Coding', location: { city: 'New York', country: 'USA' } },
// ])}

// const usersUrlAPI = "https://social-net-react-api.firebaseio.com/users.json";
const usersUrlAPI = "https://social-network.samuraijs.com/api/1.0/users";

class UsersAPIComponent extends React.Component {
  componentDidMount = () => {
    axios
      .get(
        `${usersUrlAPI}?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  onPageChanged = (e, value) => {
    this.props.setCurrentPage(value);

    axios
      .get(`${usersUrlAPI}?page=${value}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export default UsersAPIComponent;
