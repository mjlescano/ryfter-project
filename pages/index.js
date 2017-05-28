import { nextConnect } from '../store'
import Layout from '../components/layout'
import Title from '../components/title'
import FormTitle from '../components/form/title'

const Form = ({ job, company }) => (
  <Layout>
    <Title>Self-Assesment Form</Title>
    <div className='container layout-wrapper'>
      <div className='paper'>
        <FormTitle job={job} company={company} />
      </div>
    </div>
  </Layout>
)

export default nextConnect((state) => state)(Form)
