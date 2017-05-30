import { connect } from 'react-redux'
import { addSection } from '../../store/actions'
import Button from '../button'

const FormActions = ({ addSection }) => (
  <div className='form-actions paper-wrapper paper-row'>
    <style jsx>{`
      .form-actions {
        text-align: center;
      }

      .form-actions :global(button) {
        margin: 0 5px;
      }
    `}</style>
    <Button onClick={addSection}>Add section</Button>
    <Button>Add question</Button>
  </div>
)

export default connect(null, (dispatch) => ({
  addSection: (data) => dispatch(addSection(data))
}))(FormActions)
