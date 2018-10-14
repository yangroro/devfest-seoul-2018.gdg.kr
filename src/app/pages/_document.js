import Document, { Head, NextScript, Main } from 'next/document'
import Ga from '../components/Ga'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  .blind{display:none}
            h1,h2,h3,h4,h5,h6,ul,ol,li,p{margin:0;padding:0;list-style:none;}
            a{color:inherit;text-decoration:none}
            body{font-size:14px;line-height:1.4;font-family:"Roboto", sans-serif;color:#464646;word-break:keep-all}
            h1{font-size:1.6em;font-weight:600}
            button{padding:0;margin:0;border:0;background:none;-webkit-appearance:none}
            /* .header{position:fixed;top:0;left:0;right:0;z-index:100;color:white;padding:21px 30px;background-color:#00796b;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);} */
            .header-container{max-width:1200px;margin:auto;display:flex;align-items:center;justify-content:space-between}
            .header-container .logo{display:none;}
            .tab.hamburger{display:block;padding:0;margin:0;margin-right:23px}
            .main-nav{display:none}
            amp-sidebar{width:84.375%;background:white;padding:35px 0;}
            .side-nav a{display:block;padding:11px 12px;font-size:20px;color:#6f6f6f}
            .hero{position:relative;padding-top:137.5%;max-height:900px;background:url('/static/app@2x.jpg') center center no-repeat;background-size:cover;box-sizing:border-box}
            .hero h1 {}
            .hero-contents{position:absolute;left:0;right:0;top:51%;transform:translate(0, -50%)}
            .hero-contents h1 {width:84.6875%;max-width:638px;margin:auto}
            .hero .event-info {position:absolute;bottom:43px;left:50%;transform:translate(-50%, 0);font-size:14px;color:#6a9e3f;text-align:center}
            .hero .date {display:block;font-size:17px}
            .btn-set{margin-top:20px;}
            .btn{display:inline-block;padding:7px 21px 6px;margin:0 15px;border-radius:15px;background-color:#00796b;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5)}
            .link-set{margin-top:20px;text-align:right}
            .link-set a{display:inline-block;color:#00796b;font-weight:bold;padding-bottom:6px;}
            .link-set a + a {margin-left:27px;}
            .section {margin:45px 25px;color:#000}
            .section p {margin:15px 0 0}
            .section > h1 {font-size:2em}
            .section > section > h1 {font-size: 1.3em;margin:1.5em 0 1em}
            .dino-wrapper {margin:21px 0 31px}
            .dino-wrapper img {width: 98%;}
            .home-session {background-color: #f9f9f9;}

            .schedule-home-section {width:100%;margin:auto;margin-top:76px}
            .schedule-home-section h1 {font-size:20px;font-weight:bold;color:#012552;text-align:center;margin-bottom:15px;}
            .schedule-home-section .btn-more {display: block;width: 209px;font-size: 20px;font-weight: 500;color: #fff;padding: 7px 20px;margin: 0px auto;background: #00796b;border-radius: 15px;border-top-right-radius: 0;box-sizing: border-box;}

            .program-hero {}
            .program-hero section {padding:50px 20px 20px 20px;box-sizing:border-box;color:white;text-align:center;border-radius:20px;border-top-right-radius:0}
            .program-hero section h1 {color: white;margin:0}
            .program-hero .program-image {padding:0 12.5% 20px}
            .program-hero section:nth-of-type(1) {background-color:#e2513a}
            .program-hero section:nth-of-type(2) {background-color:#fbbc05}
            .program-hero h1{font-size:32px;font-weight:bold;color:#012552;text-align:center;margin-bottom:42px}
            .program-hero .btn-more{display:block;width:243px;font-size:22px;font-weight:500;color:#00796b;padding:15px 30px;margin:20px auto;background:#fff;border:1px solid #00796b;border-radius:15px;border-top-right-radius:0;box-sizing:border-box;text-align:center;}
            .place-info {position:relative}
            .place-info .place-card {position:absolute; top:0;margin:20px 20px 39px 20px;background:white;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.5);padding-bottom:0.1px}
            .place-info .place-card h1 {padding:119px 15px 5px;background-image:url(/static/venue.jpg);background-size:cover;background-position:center;color:white;font-size:20px;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);}
            .place-info .place-card p {font-weight:300;margin:12px 15px}
            .footer {background-color:#f5f5f5;padding:20px;color:#464646;}
            .footer-container {max-width:940px;margin:auto}
            .footer-container .logo {margin-top:27px;margin-bottom: 29px}
            .footer-container img {width:140px}
            .footer-container .copyright {color:#afafaf;}
            .contact h1 {font-size:20px}
            .contact p {font-weight:300}
            .coc {}
            .coc p {margin:15px 0}
            .coc .coc-section {margin-top: 25px;margin-bottom:40px;}
            .coc-section .coc-language {display:inline-block;background-color:#00796b;color:#ffffff;font-size:1.2em;padding:5px 11px;}
            .coc-section .coc-mail {color: #00796b;text-decoration: underline}

            .schedule-list-container {max-width:960px;margin:20px 30px}
            .section-header {padding:58px 0 58px;text-align:center;background:url('/static/devfest-camp@2x.png') center center no-repeat;background-size:cover;background-color:#f9f9f9}
            .schedule-container {margin-top:57px;}
            .schedule-container .schedule-row {display:flex;margin:16px 0}
            .schedule-container .schedule-time {font-size:12px;color:#3f3f3f;line-height:1;text-align:center}
            .schedule-container .schedule-time-start {display:block}
            .schedule-container .schedule-time-start::after {content:'-';display:block}
            .schedule-container .schedule-item-row {flex:1;margin-left:20px;margin-top:-3px;}
            .schedule-container .schedule-item {position:relative;flex:1;padding:12px 13px 12px 13px;border:1px solid #d8d8d8;border-radius:15px;font-size:14px;font-weight:500;color:#464646;height:40px;display: flex;justify-content: center;flex-direction: column;margin-bottom:5px}
            .schedule-container .schedule-item-meta {display:none}
            .schedule-container .schedule-item .schedule-item-title {font-size:14px}
            .schedule-container .schedule-item-info {display:none;}
            .schedule-container .schedule-item + .merged-cell {height:60px;}
            .schedule-container .schedule-item .schedule-item-speaker {display:none}
            .schedule-container .schedule-item .schedule-item-speaker-thumb {display:none}
            .menu-select-button {text-align: center;margin-top: 22px;padding-bottom: 10px;}
            .menu-button {color: #464646;background-color: #ffffff;border: 1px solid #e0e0e4;font-size: 12px;margin-right: 6px;padding: 11px 14px 11px 14px;border-radius: 21px;cursor:pointer}
            .menu-button:hover {background-color:#e0e0e4;}
            @media(min-width:960px) {
              body {font-size:16px}
              h1 {font-size:1.6em}
              .tab.hamburger{display:none}
              /* .header{padding:21px 30px;background-color:#00796b;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);} */
              .header-container{max-width:1200px;margin:auto;display:flex;align-items:center;justify-content:space-between}
              .header-container .register{display:none}
              .main-nav{display:flex;flex:1;line-height:1}
              .main-nav ul{display:flex;flex:1;align-items:center;justify-content:space-around;padding:0 30px}
              .main-nav li{margin:0 25px}
              .btn-apply {padding:11px 26px 10px;background-color:#00796b;border-radius:15px;border-top-right-radius:0;border:2px solid #fff}
              .logo {display:block;font-size:36px;}
              .logo a {display:block;}
              .hero {background-image:url(/static/hero-bg.jpg);padding:0;height:900px}
              .hero .event-info {font-size:20px;}
              .hero .date {font-size:32px}
              .info {display:flex;width:940px;margin:auto}
              .info .section {width:456px}
              .info .section + .section {margin-left:24px}
              .section + .speaker{margin-bottom:75px}
              .section {width:940px;margin:47px auto}
              .dino-wrapper img {width: 438px;}
              .camp {}
              .camp a {display:block;width:1237px;height:464px;margin:auto;background:url(/static/devfest-camp@2x.png) 0 0 no-repeat;background-size:cover;}
              .camp a span {display:block;font-size:32px;font-weight:bold;color:#012552;padding:159px 0 0;text-align:center;}
              .schedule-home-section {width:920px;margin-top:0px;}
              .schedule-home-section h1 {font-size:32px;font-weight:bold;color:#012552;text-align:center;margin-bottom:42px}
              .schedule-home-list {display:flex}
              .schedule-home-item {width:296px;height:361px;border-radius:15px;border-top-right-radius:0;border:1px solid #d8d8d8}
              .schedule-home-item + .schedule-home-item {margin-left:16px}
              .schedule-home-item .schedule-home-figure {height:160px;}
              .schedule-home-info {padding:16px 10px;font-size:14px;font-weight:500}
              .schedule-home-meta {display:flex;justify-content:space-between;margin-bottom:8px}
              .schedule-home-title {font-size:22px;font-weight:bold;margin-bottom:8px}
              .schedule-home-desc {margin-bottom:8px}
              .schedule-home-section .btn-more {display:block;width:243px;font-size:22px;font-weight:500;color:#fff;padding:15px 30px;margin:20px auto;background:#00796b;border-radius:15px;border-top-right-radius:0;box-sizing:border-box;}
              .program-hero-container {display:flex;flex-wrap:wrap;width:940px;margin:0px auto}
              .program-hero section {width:460px;margin:0}
              .program-hero section:nth-of-type(2n) {margin-left:18px}
              .place-info .place-card {position:absolute;right:132px;top:52px;width:456px;height:457px}
              .place-info .place-card h1 {padding:175px 25px 24px}
              .place-info .place-card p {margin:18px 25px}
              .footer {margin-top:0px;padding-top:78px;padding-bottom:57px}
              .footer-container img {width:215px}
              .footer-info {display:flex;justify-content:space-between;align-items:center;margin-bottom:55px}
              .contact h1 {font-size:32px;font-weight:bold}
              .contact p {font-size:20px;color:#464646}
              .coc {}
              .coc .coc-section {margin-top:35px;margin-bottom:65px;}
              .coc-section .coc-language{margin-bottom:7px;}
              .coc-section section{margin:26px 0;}
              .schedule-container {margin-top:0;}
              .section-header {padding:230px 0 132px;text-align:center;background:url('/static/devfest-camp@2x.png') center center no-repeat;background-size:cover;background-color:#f9f9f9}
              .section-header h1 {font-size:42px;font-weight:bold;color:#012552}
              .schedule-list-container {max-width:1200px;margin:60px auto}
              .schedule-container .schedule-row {display:flex;margin:16px 0}
              .schedule-container .schedule-time {font-size:17px;color:#3f3f3f;line-height:1;text-align:center}
              .schedule-container .schedule-time-start {display:block}
              .schedule-container .schedule-time-start::after {content:'-';display:block}
              .schedule-container .schedule-item-row {display:flex;flex:1;margin-left:40px}
              .schedule-container .schedule-item {display:block;position:relative;flex:1;padding:13px 13px 30px;border:1px solid #d8d8d8;border-radius:15px;font-size:14px;font-weight:500;color:#464646;height:205px;}
              .schedule-container .schedule-row:nth-of-type(-n+2) .schedule-item { height: 60px;padding: 18px 0 18px 76px;}
              .schedule-container .schedule-item-meta {display:flex;justify-content:space-between;margin-bottom:12px}
              .schedule-container .schedule-item-meta .schedule-item-category {padding: 4px 8px;font-size: 11px;border-radius: 24px;color:#ffffff}
              .schedule-container .schedule-item .schedule-item-title {font-size:20px}
              .schedule-container .schedule-item .schedule-item-speaker {display:flex;justify-content:space-between;position: absolute; bottom: 20px;width:100%}
              .schedule-container .schedule-item .schedule-item-speaker .schedule-item-speaker-name {padding-top:10px;}
              .schedule-container .schedule-item .schedule-item-speaker-thumb {display:block;right: 27px; position: absolute;}
              .schedule-container .schedule-item .schedule-item-speaker-thumb .speaker-thumb-image {display: inline-block;margin-right:2px;}
              .schedule-container .schedule-item-info {display:block;margin:12px 0;max-height:54px;overflow:hidden;color: #b9b9b9;font-weight: 400;}
              .schedule-container .schedule-item + .schedule-item {margin-left:18px}
              .schedule-container .schedule-item + .merged-cell {height:60px;}
              .menu-select-button {margin-top:39px;padding-bottom:0px;}
              .menu-button {font-size: 16px;margin-right: 14px;padding: 11px 16px 11px 16px;border: 2px solid #e0e0e4;}
            }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const { html } = this.props
    return (
      <html amp="">
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon.ico"
          />
          <link rel="canonical" href="https://devfest-seoul18.gdg.kr/" />
          <meta property="fb:app_id" content="2130873263796316" />
          <meta property="og:title" content="GDG DevFest Seoul 2018" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://devfest-seoul18.gdg.kr/static/facebook.jpg"
          />
          <meta property="og:url" content="https://devfest-seoul18.gdg.kr/" />
          <meta
            property="og:description"
            content="GDG 행사 중 가장 큰 개발자 축제인 DevFest Seoul 2018이 11월 10일 토요일 세종대학교 컨벤션센터에서 열립니다!"
          />
          <meta property="og:site_name" content="GDG DevFest Seoul 2018" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
          <noscript>
            <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
          </noscript>
          <style
            amp-custom=""
            dangerouslySetInnerHTML={{
              __html: `
            `,
            }}
          />
          <script async src="https://cdn.ampproject.org/v0.js" />
          <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
          />
          <script
            async
            custom-element="amp-iframe"
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
          />
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Ga />
        </body>
      </html>
    )
  }
}
