import Document, { Head } from 'next/document'

export default class MyDocument extends Document {
  render () {
    const { html } = this.props
    return (
      <html amp=''>
        <Head>
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <style amp-boilerplate=''>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style><noscript><style amp-boilerplate=''>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style></noscript>
          <style amp-custom=''>{`
            h1,h2,h3,h4,h5,h6,ul,ol,li{margin:0;padding:0}
            a{text-decoration:none;}
            ul,ol,li{list-style:none;}
            body{font-size:22px;font-family:APPLE SD Gothic NEO,sans-serif;padding:90px 0 0}
            .header{position:fixed;top:0;left:0;right:0;background:#00796b}
            .header-container{display:flex;justify-content:space-between;min-width:1440px;margin:auto;}
            .logo{font-size:43px;font-weight:900;color:#ffffff;padding:19px 0 19px 102px;}
            .main-nav{display:flex;margin-right:122px;align-items:center}
            .main-nav a{color:white;}
            .main-nav ul{display:flex;font-size:20px;padding:33px 0;}
            .main-nav li{margin-right:66px}
            .main-nav ul a{display:block;font-weight:300}
            .btn{font-weight:bold;padding:7px 15px 6px;border:2px solid #fff;border-radius:19.5px}
          `}</style>
          <script async src='https://cdn.ampproject.org/v0.js' />
        </Head>
        <body>
          <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </html>
    )
  }
}
