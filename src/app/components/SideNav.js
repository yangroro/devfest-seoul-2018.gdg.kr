import React, { Component } from 'react';
import Nav from './Nav';

export default class SideNav extends Component {
  render() {
    return (
      <amp-sidebar id="sidebar" layout="nodisplay" side="left">
        <Nav className="side-nav" />
      </amp-sidebar>
    )
  }
}