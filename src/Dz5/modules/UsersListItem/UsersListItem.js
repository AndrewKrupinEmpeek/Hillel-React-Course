import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import './UsersListItem.css';

export default function UsersListItem({ user }) {
  const { path } = useRouteMatch();

  return (
    <>
      <NavLink className='user-link' exact activeClassName='active'  to={`${path}/${user.id}`}>
        <ListItem className="user">
          <ListItemAvatar>
            <Avatar>
              <img className="img" src="https://picsum.photos/id/1062/200/300" alt=""/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </NavLink>
    </>
  )
}
