import { nextConnect } from '../store'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import FormTitle from '../components/form/title'
import FormActions from '../components/form/actions'

const Form = ({ job, company, items }) => (
  <Layout>
    <Title>Self-Assesment Form</Title>
    <style jsx>{`
      .submit-section {
        text-align: center;
      }
    `}</style>
    <div className='container layout-wrapper'>
      <div className='paper'>
        <FormTitle job={job} company={company} />
        <hr />
        <FormActions />
        <hr />
        <div className='submit-section paper-wrapper paper-row'>
          <Button type='primary'>Submit</Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default nextConnect((state) => state)(Form)
