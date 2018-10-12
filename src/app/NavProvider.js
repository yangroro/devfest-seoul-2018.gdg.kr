import React, { Component, createContext } from 'react'
import { enumerize } from './constants'

const NavContext = createContext()

export const userLocation = enumerize('INIT', 'HOME', 'OTHER')

class NavProvider extends Component {
  state = {
    currentLocation: userLocation.INIT,
    modalOpen: false,
  }

  actions = {
    setLocation: value => {
      this.setState(() => ({ currentLocation: value }))
    },
    toggleModal: isOpen =>
      this.setState(() => {
        return { modalOpen: isOpen }
      }),
  }

  render() {
    return (
      <NavContext.Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}

const NavConsumer = NavContext.Consumer

export { NavProvider, NavConsumer }
