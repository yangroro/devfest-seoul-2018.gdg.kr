import React, { Component } from 'react'
import Link from 'next/link'
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ON_MOBILE } from "../constants";

const LogoImg = styled.img`
  width: 248px;
  height: 183px;
  @media ${ON_MOBILE} {
    width: 144px;
    height: 107px;
  }
`;


class Navigation extends Component {
  render() {
    return (
      <nav className={this.props.className}>
        <LogoImg src={"/static/devfest-logo@3x.png"} />
        <List component="nav">
          <Link href="/">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="HOME"/>
            </ListItem>
          </Link>

          <Link href="/timetable">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="SCHEDULE" />
            </ListItem>
          </Link>

          <Link href="/team">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="TEAM" />
            </ListItem>
          </Link>

          <Link href="/code_of_conduct">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="CODE OF CONDUCT" />
            </ListItem>
          </Link>

          <a href="https://festa.io/events/88" target="_blank">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="신청하기" />
            </ListItem>
          </a>
        </List>
      </nav>
    )
  }
}

export default Navigation
