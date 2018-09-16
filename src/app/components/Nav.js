import React, { Component } from 'react';
import Link from 'next/link'

export default class SideNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li className="home"><a href="/">Home</a></li>
          {/* <li><a href="#">Speakers</a></li>
          <li><a href="#">Session</a></li> */}
          <li><Link href="/code_of_conduct"><a>Code of Conduct</a></Link></li>
          <li><a href="#">신청하기</a></li>
        </ul>
      </nav>
    )
  }
}