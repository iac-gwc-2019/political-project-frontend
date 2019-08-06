import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AlignItemsList from './AlignItemsList';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import TweetSidebar from '../TweetSidebar/TweetSidebar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 700,
  },
});

function TabContainer({ children, dir }) {

  return (
    <Typography component="div" dir={dir} style={{ padding: 16 }}>
      {children}
    </Typography>
  );
}

export default function IconLabelTabs() {
  const theme = useTheme();
  const classes = useStyles();
  const StyledTab = withStyles({
    wrapper: {
      textTransform: 'none',
      fontFamily: 'system-ui',
      fontSize: '14px'
    },
    selected: {
      color: '#78C1CA !important',
    }
  })(Tab);
  const StyledTabs = withStyles({
    indicator: {
      backgroundColor: '#78C1CA !important'
    }
  })(Tabs)
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

    function handleChangeIndex(index) {
      setValue(index);
    }

  return (
    <div>
      <div style={{marginBottom:'30px'}}>
        <TweetSidebar/>
      </div>
    <div style={{marginLeft:'0px',marginRight:'30px'}}>
    <Paper square className={classes.root}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        inkBarStyle={{ background: '#78C1CA'}}
      >
        <StyledTab icon={<InfoIcon />} label="Subjects" />
        <StyledTab icon={<BookIcon />} label="Bills" />
        <StyledTab icon={<PersonPinIcon />} label="Politicians" />
      </StyledTabs>
    </Paper>
    <div className={classes.root}>
      <AppBar position="static" color="default">
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
            <AlignItemsList />
        </TabContainer>
        <TabContainer dir={theme.direction}>
            <AlignItemsList />
        </TabContainer>
        <TabContainer dir={theme.direction}>
            <AlignItemsList />
        </TabContainer>
      </SwipeableViews>
    </div>
    </div>
    </div>
  );

}
