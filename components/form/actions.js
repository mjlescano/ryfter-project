import { connect } from 'react-redux'
import { addSection, addQuestion } from '../../store/actions'
import Button from '../button'

const FormActions = ({ addSection, addQuestion }) => (
  <div className='form-actions paper-wrapper paper-row'>
    <style jsx>{`
      .form-actions {
        text-align: center;
      }

      .form-actions :global(button) {
        margin: .3125rem;
      }
    `}</style>
    <Button onClick={addSection}>Add section</Button>
    <Button onClick={addQuestion}>Add question</Button>
  </div>
)

export default connect(null, (dispatch) => ({
  addSection: (data) => dispatch(addSection(data)),
  addQuestion: (data) => dispatch(addQuestion(data))
}))(FormActions)
