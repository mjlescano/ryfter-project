import { connect } from 'react-redux'
import { updateItem, selectItem } from '../../store/actions'
import AutoGrowTextarea from '../autogrow-textarea'

const FormSection = ({
  item,
  updateItem,
  handleSelect
}) => {
  const { title } = item

  const handleChange = (evt) => {
    updateItem({
      ...item,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <div className='section'>
      <style jsx>{`
        .section :global(.title) {
          margin: 1rem 0 0;
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

        .section :global(.title):focus {
          outline: none;
        }
      `}</style>
      <AutoGrowTextarea
        className='title'
        name='title'
        placeholder='Section Title'
        value={title}
        maxLength={80}
        onChange={handleChange}
        onFocus={handleSelect}
        autoFocus
        required />
    </div>
  )
}

export default connect(null, (dispatch, props) => ({
  updateItem: (data) => dispatch(updateItem(data)),
  handleSelect: (data) => {
    return !props.item.selected && dispatch(selectItem({ id: props.item.id }))
  }
}))(FormSection)
