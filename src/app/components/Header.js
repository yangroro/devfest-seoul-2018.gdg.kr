import React, { Component } from 'react';
import Nav from './Nav';
import Link from 'next/link'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <button className="tab hamburger" on="tap:sidebar.toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#fff"/>
            </svg>
          </button>
          <h1 className="logo"><a href="/"><amp-img src="static/devfest18-logo@3x.png" width="279px" height="141px" layout="responsive" />/></a></h1>
          <Nav className="main-nav"/>
        </div>
      </header>
    )
  }
}