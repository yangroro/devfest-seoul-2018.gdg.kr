import React, { Component } from 'react'
import styled from 'styled-components'
import { ON_MOBILE } from '../constants.js'

const ScheduleWrapper = styled.div`
  @media ${ON_MOBILE} {
    display: none;
  }
`

export default class ScheduleHome extends Component {
  render() {
    return (
      <div className="schedule-home-section">
        <h1>SCHEDULE</h1>
        <ScheduleWrapper>
          {' '}
          {/* FIXME: 모바일 display none 해제하기(shinye) */}
          <div class="schedule-home-list">
            <div class="schedule-home-item" style={{ position: 'relative' }}>
              <div
                class="schedule-home-figure"
                style={{
                  background:
                    'url(/static/speakers/kimjoontae.jpg) center center no-repeat',
                  backgroundSize: 'cover',
                }}
              />
              <div class="schedule-home-info">
                <div class="schedule-home-meta">
                  <div class="schedule-home-categories">ML</div>
                  <div class="schedule-home-language">Ko</div>
                </div>
                <div class="schedule-home-title">
                  GTA5를 이용한 자율주행 자동차
                </div>
                <div class="schedule-home-desc">
                  야! 데이터! 언제까지 게임속에 있을래?
                </div>
                <div
                  class="schedule-home-speaker"
                  style={{ position: 'absolute', bottom: 15 + 'px' }}
                >
                  김준태
                </div>
              </div>
            </div>
            <div class="schedule-home-item" style={{ position: 'relative' }}>
              <div
                class="schedule-home-figure"
                style={{
                  background:
                    'url(/static/organizers/kevin.jpg) center center no-repeat',
                  backgroundSize: 'cover',
                }}
              />
              <div class="schedule-home-info">
                <div class="schedule-home-meta">
                  <div class="schedule-home-categories">WEB</div>
                  <div class="schedule-home-language">KO</div>
                </div>
                <div class="schedule-home-title">
                  빠르다는 것 그 이상, Isomorphic PWA
                </div>
                <div class="schedule-home-desc">
                React + TypeScript로 짜인 PWA에 SSR과 Code-splitting 등을 적용한 최적의 UX
                </div>
                <div
                  class="schedule-home-speaker"
                  style={{ position: 'absolute', bottom: 15 + 'px' }}
                >
                  진겸
                </div>
              </div>
            </div>
            <div class="schedule-home-item" style={{ position: 'relative' }}>
              <div
                class="schedule-home-figure"
                style={{
                  background:
                    'url(/static/speakers/jessica.jpg) center center no-repeat',
                  backgroundSize: 'cover',
                }}
              />
              <div class="schedule-home-info">
                <div class="schedule-home-meta">
                  <div class="schedule-home-categories">Assistant</div>
                  <div class="schedule-home-language">EN</div>
                </div>
                <div class="schedule-home-title">
                  Building Conversational Experiences with Actions on Google
                </div>
                <div class="schedule-home-desc">
                  Building on Google Assistant
                </div>
                <div
                  class="schedule-home-speaker"
                  style={{ position: 'absolute', bottom: 15 + 'px' }}
                >
                  Jessica Dene Earley-Cha
                </div>
              </div>
            </div>
          </div>
        </ScheduleWrapper>
        <a href="/timetable" class="btn-more">
          전체 스케줄 보러가기
        </a>
      </div>
    )
  }
}
