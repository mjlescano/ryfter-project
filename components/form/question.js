import { connect } from 'react-redux'
import { updateItem, selectItem } from '../../store/actions'
import AutoGrowTextarea from '../autogrow-textarea'
import Select from '../select'
import Checkbox from '../checkbox'
import Ranking from './ranking'

const questionTypes = [
  { text: 'Short response', value: 'short-text' },
  { text: 'Long response', value: 'long-text' },
  { text: 'Ranking', value: 'ranking' }
]

const FormQuestion = ({
  item,
  updateItem,
  handleSelect
}) => {
  const {
    selected,
    required,
    title,
    description,
    questionType,
    rankingMinLabel,
    rankingMaxLabel
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

        .question :global(.required-marker) {
          color: #D51F2C;
        }

        .question :global([name="title"]) {
          margin: .2rem 0 0;
          font-size: .875rem;
          font-weight: 400;
        }

        .question :global([name="description"]) {
          margin: 0 0 .2rem;
          font-size: .75rem;
          font-weight: 300;
        }

        .placeholder-wrapper {
          margin-top: .5rem;
          position: relative;
          z-index: 0;
        }

        .edit-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          // position: absolute;
          // padding: 1rem;
          // width: 100%;
          // height: 100%;
          // z-index: 10;
          background-color: rgba(255, 255, 255, .8);
        }

        .short-text-placeholder,
        .long-text-placeholder {
          border-radius: 2px;
          background-color: #fafafa;
          border: 1px solid #F1F2F4;
        }

        .short-text-placeholder {
          min-height: 4.5rem;
        }

        .long-text-placeholder {
          min-height: 6rem;
        }

        .ranking-placeholder {
          display: flex;
          min-height: 4.5rem;
        }

        .input-wrapper > label {
          display: block;
          margin-top: .5rem;
          margin-bottom: .2rem;
          font-size: .7rem;
          font-weight: 400;
          cursor: pointer;
        }

        input[type="text"] {
          display: inline-block;
          border-style: solid;
          border-width: 1px;
          border-color: #A4A5AD;
          vertical-align: middle;
          font: inherit;
          font-size: .8125rem;
          position: relative;
          margin: 0 0;
          line-height: 1.25rem;
          padding: .55rem;
          border-radius: .2rem;
          font-weight: 100;
          background-color: #fff;
          appearance: none;
          max-width: 9rem;
        }
      `}</style>
      <AutoGrowTextarea
        name='title'
        placeholder={`Question title${!title && required ? ' *' : ''}`}
        value={`${title || ''}${title && !selected && required ? ' *' : ''}`}
        maxLength={140}
        onChange={handleChange}
        onFocus={handleSelect}
        autoFocus
        required />
      {(selected || description) && (
        <AutoGrowTextarea
          name='description'
          placeholder='Description (optional)'
          value={description}
          maxLength={300}
          onChange={handleChange}
          onFocus={handleSelect} />
      )}
      <div className='placeholder-wrapper'>
        {selected && (
          <div className='edit-options'>
            <div className='input-wrapper'>
              <label htmlFor='questionType'>Question Type:</label>
              <Select
                id='questionType'
                name='questionType'
                value={questionType}
                onChange={handleChange}>
                {questionTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.text}</option>
                ))}
              </Select>
            </div>
            {questionType === 'ranking' && (
              <div className='input-wrapper'>
                <label htmlFor='rankingMinLabel'>Min Label:</label>
                <input
                  type='text'
                  id='rankingMinLabel'
                  name='rankingMinLabel'
                  maxLength={12}
                  value={rankingMinLabel}
                  onChange={handleChange} />
              </div>
            )}
            {questionType === 'ranking' && (
              <div className='input-wrapper'>
                <label htmlFor='rankingMaxLabel'>Max Label:</label>
                <input
                  type='text'
                  id='rankingMaxLabel'
                  name='rankingMaxLabel'
                  maxLength={12}
                  value={rankingMaxLabel}
                  onChange={handleChange} />
              </div>
            )}
            <Checkbox
              name='required'
              value={required}
              onChange={handleChange}>
              Required?
            </Checkbox>
          </div>
        )}
        {!selected && questionType === 'short-text' && (
          <div className='short-text-placeholder' />
        )}
        {!selected && questionType === 'long-text' && (
          <div className='long-text-placeholder' />
        )}
        {!selected && questionType === 'ranking' && (
          <div className='ranking-placeholder'>
            <Ranking min={rankingMinLabel} max={rankingMaxLabel} />
          </div>
        )}
      </div>
    </div>
  )
}

export default connect(null, (dispatch, props) => ({
  updateItem: (data) => dispatch(updateItem(data)),
  handleSelect: (data) => {
    return !props.item.selected && dispatch(selectItem({ id: props.item.id }))
  }
}))(FormQuestion)
