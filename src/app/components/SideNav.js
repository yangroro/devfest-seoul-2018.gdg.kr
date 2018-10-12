import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Nav from './Nav';

export default class SideNav extends Component {
  toggleSideNavDrawerFromItself = (isOpened) => () => {
    this.props.toggleSideNavDrawer(isOpened);
  };

  render() {
    return (
      <SwipeableDrawer
        open={this.props.isSideNavDrawerOpened}
        onClose={this.toggleSideNavDrawerFromItself(false)}
        onOpen={this.toggleSideNavDrawerFromItself(true)}
      >
        <Nav
          className="side-nav"
          onComponentClicked={this.toggleSideNavDrawerFromItself(false)} />
      </SwipeableDrawer>
    )
  }
}