import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="logo">DEVFEST 2018</h1>
          <nav className="main-nav">
            <ul>
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Session</a></li>
              <li><a href="#">Code of Conduct</a></li>
            </ul>
            <a href="#" className="btn">신청하기</a>
          </nav>
        </div>
      </header>
    )
  }
}