import React, { Component } from 'react';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Session</a></li>
          <li><a href="#">Code of Conduct</a></li>
          <li><a href="#">신청하기</a></li>
        </ul>
      </nav>
    )
  }
}