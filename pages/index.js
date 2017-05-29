import { nextConnect } from '../store'
import { addSection, moveItem, grabItem } from '../store/actions'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import FormTitle from '../components/form/title'
import FormActions from '../components/form/actions'
import FormItems from '../components/form/items'

const Form = ({
  job,
  company,
  items,
  addSection,
  moveItem,
  grabItem
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
        <FormItems
          onMove={moveItem}
          onGrab={grabItem}
          items={items} />
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
  addSection: () => dispatch(addSection()),
  moveItem: (data) => dispatch(moveItem(data)),
  grabItem: (data) => dispatch(grabItem(data))
}))(Form)
