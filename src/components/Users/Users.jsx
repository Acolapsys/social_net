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
import Pagination from '@material-ui/lab/Pagination';
import {NavLink} from 'react-router-dom'

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
    fontSize: "3rem"
  },
  ListItemAvatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
  },
  follow: {
    marginTop: "10px",
  },
}));






const Users = (props) => {
  const classes = useStyles();
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Users
        </Typography>
        <Pagination count={pagesCount} page={props.currentPage} variant="outlined" onChange={props.onPageChanged}/>
        <div className={classes.demo}>
          <List>
            {props.users.map((el) => (
              <ListItem key={el.id} divider={true}>
                <ListItemAvatar className={classes.ListItemAvatar}>
                  
                  <NavLink to={`/profile/${el.id}`}>
                  <Avatar src={el.photos.small || null}></Avatar>
                  </NavLink>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className={(classes.margin, classes.follow)}
                    onClick={
                      el.followed
                        ? () => {
                            props.unfollow(el.id);
                          }
                        : () => {
                            props.follow(el.id);
                          }
                    }
                  >
                    {el.followed ? "Unfollow" : "Follow"}
                  </Button>
                </ListItemAvatar>
                <ListItemText primary={el.name} secondary={el.status} />
                <ListItemSecondaryAction>
                  <ListItemText
                    primary="el.location.country"
                    secondary="el.location.city"
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default Users;
