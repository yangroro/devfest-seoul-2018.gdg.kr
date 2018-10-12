import React, { Component } from 'react'
import Link from 'next/link'
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider';

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
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="SCHEDULE" />
            </ListItem>
          </Link>

          <Link href="/team">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="TEAM" />
            </ListItem>
          </Link>

          <Link href="/code_of_conduct">
            <ListItem button onClick={this.props.onComponentClicked}>
              <ListItemIcon>
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText primary="CODE OF CONDUCT" />
            </ListItem>
          </Link>

          <a href="https://festa.io/events/88" target="_blank">
            <ListItem button onClick={this.props.onComponentClicked}>
                <ListItemIcon>
                  <SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
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
