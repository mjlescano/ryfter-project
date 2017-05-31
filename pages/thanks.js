import { nextConnect } from '../store'
import Layout from '../components/layout'
import Title from '../components/title'

const bin = 'https://requestb.in/16pzdyp1'

const Thanks = () => (
  <Layout>
    <style jsx>{`
      a {
        color: #337ab7;
      }
    `}</style>
    <Title>Thank You!</Title>
    <div className='container layout-wrapper'>
      <div className='paper'>
        <div className='paper-wrapper paper-row'>
          <h1 className='paper-title'>
            Thank You!
          </h1>
          <h2 className='paper-subtitle'>
            That's all for now.
            The result can be seen at <a href={`${bin}?inspect`} target='_blank' rel='noopener nofollow'>{`${bin}?inspect`}</a>.
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default nextConnect()(Thanks)
