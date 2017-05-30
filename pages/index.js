import { nextConnect } from '../store'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import FormTitle from '../components/form/title'
import FormActions from '../components/form/actions'
import FormItems from '../components/form/items'

const Form = () => (
  <Layout>
    <Title>Self-Assesment Form</Title>
    <style jsx>{`
      .submit-section {
        text-align: center;
      }
    `}</style>
    <div className='container layout-wrapper'>
      <div className='paper'>
        <FormTitle />
        <hr />
        <FormItems />
        <FormActions />
        <hr />
        <div className='submit-section paper-wrapper paper-row'>
          <Button type='primary'>Submit</Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default nextConnect()(Form)
