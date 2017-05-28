import Head from 'next/head'
import Title from './title'
import Footer from './footer'

export default (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
      <link href='/static/fonts.css' rel='stylesheet' type='text/css' />
    </Head>
    <Title />
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      button {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
      }

      body {
        font-size: 1rem;
        font-family: 'Gotham SSm', Montserrat, sans-serif;
        line-height: 1.2;
        color: #36373E;
        text-rendering: geometricPrecision;
        background-color: #F1F2F4;
      }

      ::selection {
        background-color: rgba(54,55,62,0.7);
        color: #F1F2F4;
      }

      img {
        max-width: 100%;
        vertical-align: middle;
        font-style: italic;
      }

      a {
        color: inherit;
        font-family: inherit;
        text-decoration: none;
      }

      .container {
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
        max-width: 750px;
        width: 100%;
      }

      .layout-wrapper {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .paper {
        border: 1px solid #DEE0E5;
        border-radius: .2rem;
        width: 100%;
        background-color: #FFFFFF;
      }

      .paper-wrapper {
        padding-top: 1.875rem;
        padding-bottom: 1.875rem;
      }

      .paper-row {
        padding-left: 1.875rem;
        padding-right: 1.875rem;
      }

      .paper-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.875rem;
      }

      .paper-subtitle {
        margin: 0;
        color: #A4A5AD;
        font-size: .75rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.875rem;
      }

      .paper > hr {
        margin: 0;
        border: 0;
        border-top: 1px solid #DEE0E5;
      }
      `}</style>
    {props.children}
    <Footer />
  </div>
)
