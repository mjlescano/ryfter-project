import { connect } from 'react-redux'
import { updateItem } from '../../store/actions'
import AutoGrowTextarea from '../autogrow-textarea'

const FormQuestion = ({
  item,
  updateItem
}) => {
  const {
    selected,
    title,
    description
  } = item

  const handleChange = (evt) => {
    updateItem({
      ...item,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <div className='question'>
      <style jsx>{`
        .question :global(textarea) {
          font-family: inherit;
          cursor: initial;
          padding: 0;
          border: 0;
          max-width: 100%;
          width: 100%;
          resize: none;
          outline: none;
        }

        .question :global(.title) {
          margin: .2rem 0 0;
          font-size: .875rem;
          font-weight: 400;
        }

        .question :global(.description) {
          margin: 0 0 .2rem;
          font-size: .75rem;
          font-weight: 300;
        }
      `}</style>
      <AutoGrowTextarea
        className='title'
        name='title'
        placeholder='Question title'
        value={title}
        maxLength={140}
        onChange={handleChange}
        autoFocus
        required />
      <AutoGrowTextarea
        className='description'
        name='description'
        placeholder='Description (optional)'
        value={description}
        maxLength={300}
        onChange={handleChange} />
    </div>
  )
}

export default connect(null, (dispatch) => ({
  updateItem: (data) => dispatch(updateItem(data))
}))(FormQuestion)
