import React, { Component } from 'react'
import Data from '../static/schedule.json'
import ScheduleItem from './ScheduleItem'
import { ModalProvider } from 'styled-react-modal'

const SessionRowList = ({ list, ...time }) => (
  <ModalProvider>
    <div className="schedule-item-row">
      {list.map(session => <ScheduleItem {...time} session={session} />)}
    </div>
  </ModalProvider>
)

export default class Schedule extends Component {
  constructor() {
    super()

    this.state = {
      scheduleData: Data.schedules,
    }
  }
  render() {
    let scheduleList = this.state.scheduleData.map(schedule => {
      return (
        <div className="schedule-row">
          <div className="schedule-time">
            <span className="schedule-time-start">{schedule.start_time}</span>
            <span className="schedule-item-end">{schedule.end_time}</span>
          </div>
          <SessionRowList
            startTime={schedule.start_time}
            endTime={schedule.end_time}
            list={schedule.sessionList}
          />
        </div>
      )
    })

    return <div className="schedule-list-container">{scheduleList}</div>
  }
}
