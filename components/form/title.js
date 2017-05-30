import { connect } from 'react-redux'

const FormTitle = ({ job, company }) => (
  <div className='paper-wrapper paper-row'>
    <h1 className='paper-title'>
      Self-Assesment Form
    </h1>
    <h2 className='paper-subtitle'>
      To be completed by a {job.title} for {company.name}.
    </h2>
  </div>
)

export default connect(({ job, company }) => ({ job, company }))(FormTitle)
