import { connect } from 'react-redux'
import classNames from 'classnames'
import { SortableHandle } from 'react-sortable-hoc'
import { selectItem, removeItem } from '../../store/actions'
import Section from './section'

const kinds = {
  section: Section
}

const FormItem = ({
  item,
  selectItem,
  removeItem
}) => {
  const {
    kind,
    grabbed,
    selected
  } = item

  const Item = kinds[kind]

  const className = classNames(
    'form-item',
    'paper-row',
    `form-item-${kind}`,
    { grabbed },
    { selected }
  )

  const handleClick = () => !selected && selectItem({ id: item.id })
  const handleRemove = () => removeItem({ id: item.id })

  return (
    <div className={className} onClick={handleClick}>
      <style jsx>{`
        .form-item {
          position: relative;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          transition:
            border-color .15s ease-in-out,
            box-shadow .6s cubic-bezier(.25,.8,.25,1),
            transform 8ms ease-in-out,
            background-color .04s ease-in-out;
          background-color: #FFF;
        }

        .form-item.grabbed :global(.grabber),
        .form-item.selected :global(.grabber),
        .form-item:hover :global(.grabber),
        .form-item.grabbed .remove-item,
        .form-item.selected .remove-item,
        .form-item:hover .remove-item,
        .remove-item:focus {
          opacity: 1;
        }

        .form-item.grabbed {
          cursor: -webkit-grabbing;
          cursor: grabbing;
          box-shadow:
            0 5px 20px rgba(0,0,0,.19),
            0 5px 6px rgba(0,0,0,.23);
        }

        .form-item.selected {
          border-left-color: #575B6B;
          border-right-color: #575B6B;
        }

        .form-item:not(.selected) {
          cursor: pointer;
        }

        .remove-item {
          position: absolute;
          top: 50%;
          right: 0;
          padding: .5rem;
          font-size: 1.4rem;
          line-height: 1rem;
          background-color: transparent;
          color: #A4A5AD;
          cursor: pointer;
          transition:
            opacity .3s ease-in-out,
            color .3s ease-in-out;
          transform: translateY(-1.2rem);
          opacity: 0;
        }

        .remove-item:hover {
          color: #D51F2C;
        }
      `}</style>
      <Grabber />
      <Item item={item} />
      <button
        type='button'
        className='remove-item'
        onClick={handleRemove}>
        &times;
      </button>
    </div>
  )
}

export default connect(null, (dispatch) => ({
  selectItem: (data) => dispatch(selectItem(data)),
  removeItem: (data) => dispatch(removeItem(data))
}))(FormItem)

const Grabber = SortableHandle(({ active }) => (
  <div className='grabber'>
    <style jsx>{`
      .grabber {
        position: absolute;
        left: 0;
        top: 0;
        width: 1.875rem;
        height: 100%;
        padding: 1rem .5rem;
        opacity: 0;
        transition: opacity .1s ease-in-out;
        cursor: -webkit-grab;
        cursor: grab;
      }

      .grabber::after {
        content: ' ';
        display: block;
        width: 100%;
        height: 100%;
        background-image:
          radial-gradient(#d5d5d5 25%, transparent 26%),
          radial-gradient(#d5d5d5 25%, transparent 26%);
        background-size: .5rem .5rem;
      }
    `}</style>
  </div>
))
