import { connect } from 'react-redux'
import { updateItem } from '../../store/actions'
import AutoGrowTextarea from '../autogrow-textarea'

const FormSection = ({
  item,
  updateItem
}) => {
  const { title } = item

  const handleChange = (evt) => {
    updateItem({
      ...item,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <div>
      <style jsx>{`
        :global(.title) {
          margin: 1rem 0 .5rem;
          font-size: 1.5rem;
          font-weight: 300;
          text-align: center;
          line-height: 1.875rem;
          font-family: inherit;
          cursor: initial;
          padding: 0;
          border: 0;
          max-width: 100%;
          width: 100%;
          resize: none;
        }

        :global(.title):focus {
          outline: none;
        }

        p {
          margin: 0;
          color: #A4A5AD;
          font-size: .75rem;
          font-weight: 300;
          text-align: center;
          line-height: 1.875rem;
        }
      `}</style>
      <AutoGrowTextarea
        className='title'
        name='title'
        placeholder='Section Title'
        value={title}
        maxLength={80}
        onChange={handleChange}
        autoFocus
        required />
    </div>
  )
}

export default connect(null, (dispatch) => ({
  updateItem: (data) => dispatch(updateItem(data))
}))(FormSection)
