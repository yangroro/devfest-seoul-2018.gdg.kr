import React from 'react'
import Modal from 'styled-react-modal'
import styled, { css } from 'styled-components'
import { ON_MOBILE, radStyle } from '../constants.js'

const SpeakerModal = Modal.styled`
  flex-wrap: wrap;
  width: 100%;
  max-width: 640px;
  max-height: 700px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 2px 28px 0 rgba(152, 151, 151, 0.35);
  padding: 0 40px;
  display: flex;

  @media ${ON_MOBILE} {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0 15px;
  }
`

const ModalCloseContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
  @media ${ON_MOBILE} {
    height: 15px;
  }
`

const ModalCloser = styled.img`
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  width: ${p => (p.width ? p.width : '100%')};
  font-size: 20px;
  @media ${ON_MOBILE} {
    font-size: 12px;
  }
  ${p =>
    p.margin &&
    css`
      margin: ${p.margin};
    `};
  ${p =>
    p.wrap &&
    css`
      flex-wrap: wrap;
    `};
  ${p =>
    p.verticalCenter &&
    css`
      justify-content: center;
    `};
  ${p =>
    p.horizontalCenter &&
    css`
      align-items: center;
    `};
/* height: ${p => (p.height ? p.height : 'auto')}; */
`

const TrackInfo = styled.div`
  ${radStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103px;
  height: 38px;
  font-size: 20px;
  font-weight: bold;
  background-color: #00796b;
  color: #fff;
  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const TimeInfo = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: #000;
  margin-left: 20px;
  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const HallInfo = styled.div`
  margin-left: 40px;
  font-size: 20px;
  font-weight: normal;
  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const ModalTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  @media ${ON_MOBILE} {
    font-size: 18px;
  }
`

const DinoImg = styled.div`
  background-image: url(${p => p.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 72px;
  width: 100%;
`

const ModalContent = styled.div`
  font-size: 18px;
  font-weight: normal;

  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const SpeakerImgBox = styled.div`
  height: 145px;
  width: 170px;
  margin-right: 30px;

  @media ${ON_MOBILE} {
    margin-right: 10px;
    width: 130px;
  }
`

const ModalSpeakerImg = styled.div`
  position: absolute;
  margin-top: ${p => (p.second ? '5px' : '-65px')};
  background-image: url(${p => p.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 120px;
  width: 100%;
  height: 120px;
  border-radius: 50%;

  @media ${ON_MOBILE} {
    max-width: 80px;
    width: 100%;
    height: 80px;
  }
`

const ModalSpeakerName = styled.div`
  font-size: 20px;
  margin-right: 10px;
  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const ModalSpeakerAffiliation = styled.div`
  color: #747474;
  font-size: 18px;
  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const ModalSpeakerIntro = styled.div`
  font-size: 16px;
  @media ${ON_MOBILE} {
    font-size: 12px;
  }
`

const SocialButton = styled.img`
  margin: 0 5px;
  height: 26px;
`

const SpeakerModalWrapper = ({
  isOpen,
  afterOpen,
  beforeClose,
  toggleModal,
  opacity,
  session,
  startTime,
  endTime,
}) => (
  <SpeakerModal
    isOpen={isOpen}
    afterOpen={afterOpen}
    beforeClose={beforeClose}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}
    opacity={opacity}
  >
    <ModalCloseContainer>
      <ModalCloser
        src="/static/modal/x.png"
        height="19px"
        width="19px"
        layout="responsive"
      />
    </ModalCloseContainer>
    <Row horizontalCenter>
      <TrackInfo radius="10px">{session.category}</TrackInfo>
      <TimeInfo>
        {startTime} ~ {endTime}
      </TimeInfo>
      <HallInfo>Hall {session.hall}</HallInfo>
    </Row>
    <Row margin="1.5em 0 0 0">
      <ModalTitle>{session.title}</ModalTitle>
    </Row>
    <Row margin="1.5em 0 0 0">
      <ModalContent>{session.description}</ModalContent>
    </Row>
    <Row>
      <DinoImg url="static/modal/dinosaur.png" />
    </Row>
    <Row>
      <SpeakerImgBox>
        <img
          src="/static/modal/dots.png"
          height="80px"
          width="80px"
          layout="responsive"
        />
        <ModalSpeakerImg url={session.speaker[0].thumb} />
        {session.speaker[1] && (
          <ModalSpeakerImg
            second
            // style={{ marginTop: '5px' }}
            url={session.speaker[1].thumb}
          />
        )}
      </SpeakerImgBox>
      <Row wrap horizontalCenter>
        <ModalSpeakerName>
          {session.speaker.map(data => data.name).join(' & ')}
        </ModalSpeakerName>
        <ModalSpeakerAffiliation>
          {''}
          {session.speaker.map(x => x.info).join(' & ')}
        </ModalSpeakerAffiliation>
        <Row>
          <ModalSpeakerIntro>
            {session.speaker.map(data => data.bio)}
          </ModalSpeakerIntro>
        </Row>
      </Row>
    </Row>
    <Row margin="1.5em 0 1.5em 0" verticalCenter>
      {Object.entries(session.speaker[0].link).map(([type, link]) => {
        return (
          link.length > 0 && <a href={link} target="_blank">
            <SocialButton
                src={`/static/modal/social-${type}.png`}
            />            
          </a>
        )
      })}
    </Row>
  </SpeakerModal>
)

export default SpeakerModalWrapper
