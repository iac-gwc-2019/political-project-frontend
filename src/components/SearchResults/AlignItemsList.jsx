import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import aoc from './aoc.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '400px',
    borderRadius: '5px',
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'system-ui'
  },
  inline: {
    display: 'inline',
    borderRadius: '5px',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  const StyledListItemText = withStyles({
    primary: {
      fontFamily: 'system-ui'
    },
    second: {
      fontFamily: 'system-ui'
    }
  })(ListItemText)

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={aoc} />
        </ListItemAvatar>
        <StyledListItemText
          primary="Healthcare"
          secondary={
            <React.Fragment>
              {"Content"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
