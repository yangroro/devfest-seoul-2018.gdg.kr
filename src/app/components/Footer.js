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
              GDG Korea
            </div>
          </div>
          <p>Copyright all right reserved GDG Korea</p>
        </div>
      </footer>
    )
  }
}