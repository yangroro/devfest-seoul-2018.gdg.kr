import React, { Component } from 'react';

export default class Place extends Component {
  render() {
    return (
      <section>
        <h1 className="blind">Location</h1>
        <div className="place-info">
          <iframe width="100%"
            height="500px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2104195572015!2d127.07098231562158!3d37.550105979801046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sen!2skr!4v1536198269425" />
          {/* <div className="place-card">
            <h1>세종대학교 광개토관</h1>
            <p>세종컨벤션센터는 세종대학교에서 아차산의 수려한 자연경관과 도심 속 푸른 숲 어린이대공원이 어우러진 자연감각의 현대적 시설로 편리한 교통과 One-Stop-Service가 제공되는 국제규모의 전문 컨벤션입니다.</p>
            <p>주차는 지원되지 않습니다.</p>
            <p>가급적 대중교통을 이용해주세요.</p>
          </div> */}
        </div>
      </section>
    )
  }
}
