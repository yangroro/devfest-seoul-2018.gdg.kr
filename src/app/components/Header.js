import React, { Component } from 'react'
import Nav from './Nav'
import styled, { css } from 'styled-components'
import { NavConsumer } from '../NavProvider'
import { ON_MOBILE } from '../constants'

const HeaderWrapper = styled.div`
  text-shadow: white 0px 0px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: ${p => (p.white ? 'white ' : 'rgba(0, 121, 107, 1)')};
  padding: 40px 30px;
  transition: all 0.3s ease;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background-color: transparent;
  font-size: 20px;

  .btn-apply {
    color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  @media ${ON_MOBILE} {
    background-color: rgba(0, 121, 107, 1);
    padding: 15px 30px;
  }

  ${p =>
    p.sticky &&
    !p.modalOpen &&
    css`
      color: white;
      padding: 25px 30px;
      background-color: rgba(0, 121, 107, 1);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      .btn-apply {
        box-shadow: none;
      }

      @media ${ON_MOBILE} {
        background-color: rgba(0, 121, 107, 1);
        padding: 7px 30px;
      }
    `};

  ${p =>
    p.modalOpen &&
    css`
      background-color: transparent;
      color: transparent;

      .btn-apply {
        color: white;
        box-shadow: 0 2px 9px 0 rgba(86, 84, 84, 0.36);
      }
    `};
`

export default class Header extends Component {
  state = {
    isSticky: false,
    userLocation: '/',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.updateUserLocation()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate() {
    this.updateUserLocation()
  }

  // shouldComponentUpdate(_, nextState) {
  //   if (nextState.userLocation === window.location.pathname) {
  //     return false
  //   } else return true
  // }

  updateUserLocation = () => {
    if (this.state.userLocation !== window.location.pathname) {
      this.setState(() => ({ userLocation: window.location.pathname }))
    }
  }

  handleScroll = _ => {
    const top =
      document.documentElement.scrollTop ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop
    if (top < 1) {
      this.setState(() => ({ isSticky: false }))
    } else {
      this.setState(() => ({ isSticky: true }))
    }
  }

  render() {
    // console.log(currentLocation)
    return (
      <NavConsumer>
        {({ state }) => (
          <HeaderWrapper
            white={this.state.userLocation === '/' ? true : false}
            modalOpen={state.modalOpen}
            sticky={this.state.isSticky}
            className="header"
          >
            <div className="header-container">
              <button
                className="tab hamburger"
                onClick={this.props.toggleSideNavDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <h1 className="logo">
                <a href="/">DevFest</a>
              </h1>
              <Nav className="main-nav" />
            </div>
          </HeaderWrapper>
        )}
      </NavConsumer>
    )
  }
}
