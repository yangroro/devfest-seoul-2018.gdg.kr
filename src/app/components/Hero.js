import React, { Component } from 'react';

export default class SideNav extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-contents">
          <h1>GDG DevFest<br/>Seoul 2018</h1>
          <p>2018년 11월 10일(토) @세종대학교 광개토관</p>
          <div className="btn-set">
            <a href="#" className="btn">티켓구매</a>
            <a href="#" className="btn">신청하기</a>
          </div>
        </div>
      </div>
    )
  }
}