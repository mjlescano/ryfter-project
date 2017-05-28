import Head from 'next/head'
import Title from './Title'
import Footer from './Footer'

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

      .container-paper {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .paper {
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        border: 1px solid #DEE0E5;
        border-radius: .2rem;
        width: 100%;
        background-color: #FFFFFF;
      }

      .paper-row {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
      }
      `}</style>
    {props.children}
    <Footer />
  </div>
)
