import { nextConnect } from '../store'
import { addSection } from '../store/actions'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import FormTitle from '../components/form/title'
import FormActions from '../components/form/actions'
import FormItem from '../components/form/item'

const Form = ({
  job,
  company,
  items,
  addSection
}) => (
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
        {items.map((item) => <FormItem key={item.id} item={item} />)}
        <FormActions addSection={addSection} />
        <hr />
        <div className='submit-section paper-wrapper paper-row'>
          <Button type='primary'>Submit</Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default nextConnect((state) => state, (dispatch) => ({
  addSection: () => dispatch(addSection())
}))(Form)
