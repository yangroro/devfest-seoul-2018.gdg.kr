import React, { Component } from 'react';
import Schedule from './Schedule';

export default class Timetable extends Component {
    constructor() {
      super();
    }
    render() {
      return (
        <section className="schedule-container">
          <header className="section-header">
            <h1>SCHEDULE</h1>
          </header>
          <div className="menu-select-button">
            <button className="menu-button">MAIN SESSION</button> {/* TODO: props 줘서 버튼 동작시키기 */}
            <button className="menu-button">CODELAB / MEDITATION</button>
          </div>
          <Schedule />
        </section>
      )
    }
  }
