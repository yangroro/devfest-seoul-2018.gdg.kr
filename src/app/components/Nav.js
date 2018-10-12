import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/timetable">
              <a>SCHEDULE</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>TEAM</a>
            </Link>
          </li>
          <li>
            <Link href="/code_of_conduct">
              <a>Code of Conduct</a>
            </Link>
          </li>
        </ul>
        <a
          href="https://festa.io/events/88"
          target="_blank"
          className="btn-apply"
        >
          신청하기
        </a>
      </nav>
    )
  }
}

export default Navigation
