import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <div className="contact">
              <h1>Contact us</h1>
              <p>devfest-seoul-2018@googlegroups.com</p>
            </div>
            <div className="logo">
              <img src="/static/gdg-logo.png" />
            </div>
          </div>
          <p className="copyright">
          <b>© DevFest Seoul 2018</b> <br />
          Designed: Eunjeong Kim, Nayeon Kim <br />
          Developed: Eun Cho, Heechan Yang, Shinye Song <br />
          </p>
        </div>
      </footer>
    )
  }
}