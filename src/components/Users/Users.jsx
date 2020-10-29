import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ListItemSecondaryAction } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  ListItemAvatar: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '20px'

  },
  follow: {
      marginTop: '10px'
  }
}));



const Users = (props) => {
  const classes = useStyles();
  if (props.users.length === 0) {
  props.setUsers([
    { id: 1, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Admin", status: 'On the wave', location: { city: 'Chusovoy', country: 'Russia' } },
    { id: 2, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Eleonora", status: 'I am stylist', location: { city: 'Chusovoy', country: 'Russia' } },
    { id: 3, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Dmitry", status: 'Boom Boom', location: { city: 'Moscow', country: 'Russia' } },
    { id: 4, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Alexey", status: 'Reading manual', location: { city: 'Sochi', country: 'Russia' } },
    { id: 5, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Sergey", status: 'Coding', location: { city: 'New York', country: 'USA' } },
])}

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Users
        </Typography>
        <div className={classes.demo}>
          <List>
            {props.users.map((el) => (
              <ListItem key={el.id} divider={true}>
                <ListItemAvatar className={classes.ListItemAvatar}>
                  <Avatar src={el.avatarUrl}></Avatar>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className={classes.margin, classes.follow}
                    onClick={el.followed ? () => {props.unfollow(el.id)} : () => {props.follow(el.id)}}
                  >
                    {el.followed ? 'Unfollow' : 'Follow'}
                  </Button>
                </ListItemAvatar>
                <ListItemText primary={el.fullName} secondary={el.status} />
                <ListItemSecondaryAction>
                  <ListItemText
                    primary={el.location.country}
                    secondary={el.location.city}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </div>
  );
}

export default Users;
