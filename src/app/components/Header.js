import React, { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <button class="tab hamburger" on="tap:sidebar.toggle">
            OPEN
          </button>
          <h1 className="logo">DEVFEST 2018</h1>
          <Nav className="main-nav"/>
        </div>
      </header>
    )
  }
}