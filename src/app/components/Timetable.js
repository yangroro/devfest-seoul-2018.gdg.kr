import React, { Component } from 'react';
import Schedule from './Schedule';
import Codelab from './Codelab';
import Meditation from './Meditation';

export default class Timetable extends Component {
    state = {
        currentPage: 'main_session',
      }

    changeCurrentPage(page) {
        this.setState(() => ({ currentPage: page }))
    }

    render() {
      return (
        <section className="schedule-container">
          <header className="section-header">
            <h1>SCHEDULE</h1>
          </header>
          <div className="menu-select-button">
            <button className="menu-button" onClick={() => this.changeCurrentPage('main_session')}>MAIN SESSION</button>
            <button className="menu-button" onClick={() => this.changeCurrentPage('special_session')}>CODELAB / MEDITATION</button>
          </div>
          {this.state.currentPage === 'main_session'
            ? <Schedule />
            : <div>
              <Codelab />
              <div style={{marginTop: 40+'px'}}><Meditation /></div>
            </div>}
        </section>
      )
    }
  }
