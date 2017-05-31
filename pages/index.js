import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import { nextConnect, hasQuestions } from '../store'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import FormTitle from '../components/form/title'
import FormActions from '../components/form/actions'
import FormItems from '../components/form/items'

const Form = ({ isEmpty, items }) => (
  <Layout>
    <Title>Self-Assesment Form</Title>
    <style jsx>{`
      .submit-section {
        text-align: center;
      }

      .paper {
        position: relative;
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
          <Button
            disabled={isEmpty}
            kind='primary'
            onClick={() => logForm(items)}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default nextConnect(({ items }) => ({
  items,
  isEmpty: !hasQuestions(items)
}))(Form)

function logForm (state) {
  fetch('/log-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  })

  Router.push('/thanks')
}
