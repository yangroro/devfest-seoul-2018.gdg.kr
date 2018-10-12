import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li className="home" onClick={this.props.onComponentClicked}>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li onClick={this.props.onComponentClicked}>
            <Link href="/timetable">
              <a>SCHEDULE</a>
            </Link>
          </li>
          {/* <li onClick={this.props.onComponentClicked}>
            <Link href="/team">
              <a>TEAM</a>
            </Link>
          </li> */}
          <li onClick={this.props.onComponentClicked}>
            <Link href="/code_of_conduct">
              <a>CODE OF CONDUCT</a>
            </Link>
          </li>
        </ul>
        <li onClick={this.props.onComponentClicked}>
          <a
            href="https://festa.io/events/88"
            target="_blank"
            className="btn-apply">
            신청하기
          </a>
        </li>
      </nav>
    )
  }
}

export default Navigation
