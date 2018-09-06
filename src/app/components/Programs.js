import React, { Component } from 'react';

export default class Programs extends Component {
  render() {
    return (
      <div className="program-hero">
        <section>
          <h1>메인 프로그램</h1>
          <p>최근 많은 이들의 주목을 받는 기술에 대한 지식을 가진 연사분들의 멋진 발표를 만나보세요! 다채로운 주제로 구성 된 발표들은 세 개의 트랙으로 나뉘어 진행 됩니다.</p>
        </section>
        <section>
          <h1>코드랩 (ML Kit with Firebase)</h1>
          <p>ML Kit를 통해 Android / iOS 앱에 머신러닝을 도입하는 과정을 함께 만들어봐요! 머신러닝을 처음 접해보아도 괜찮아요. 처음부터 차근차근 알려드릴게요! (노트북을 꼭 지참해주세요.)</p>
        </section>
        <section>
          <h1>필라테스 세션</h1>
          <p>장시간 앉아있는 우리의 무거워진 몸을 편안하게 만들어 줄 필라테스 세션을 준비했습니다. 한결 가벼워진 몸과 마음으로 DevFest를 즐겨보세요!</p>
        </section>
        <section>
          <h1>영어 세션</h1>
          <p>올해 DevFest는 더 다양한 분들과의 축제를 만들기 위해 영어로 진행되는 세션도 함께합니다! 풍부한 인사이트를 가진 외국인 연사분들의 발표가 여러분을 기다리고 있습니다.</p>
        </section>
      </div>
    )
  }
}