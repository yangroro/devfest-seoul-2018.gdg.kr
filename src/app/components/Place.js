import React, { Component } from 'react';

export default class Place extends Component {
  render() {
    return (
      <section>
        <h1 className="blind">Place</h1>
        <div className="place-info">
          <amp-iframe width="320" 
            height="182" 
            frameborder="0" 
            sandbox="allow-scripts allow-same-origin"
            layout="responsive"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2104195572015!2d127.07098231562158!3d37.550105979801046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sen!2skr!4v1536198269425"></amp-iframe>
          <div className="place-card">
            <h1>세종대학교 광개토관</h1>
            <p>세종대학교 광개토관은 최대 약 1,000명을 동시에 수용할 수 있는 규모를 갖추고 있습니다.</p>
            <p>또한, 전면 유리로 된 건물로 각 실에서 관악산의 수려한 경관을 감상하실 수 있습니다.</p>
            <p>주차는 지원되지 않습니다.가급적 대중교통을 이용해주세요.</p>
          </div>
        </div>
      </section>
    )
  }
}