import { connect } from 'react-redux'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { moveItem, grabItem } from '../../store/actions'
import FormItem from './item'

const FormItems = ({
  items,
  grabItem,
  moveItem
}) => {
  const handleSortStart = ({ index }) => {
    // Hack to have the grab hand when moving an item
    document.body.classList.add('item-grabbed')
    grabItem({ index })
  }

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    // Hack to have the grab hand when moving an item
    document.body.classList.remove('item-grabbed')
    moveItem({ oldIndex, newIndex })
  }

  return (
    <div>
      <style jsx global>{`
        body.item-grabbed,
        body.item-grabbed .form-item {
          cursor: grabbing !important;
          cursor: -webkit-grabbing !important;
        }
      `}</style>
      <FormItemsList
        lockAxis={'y'}
        lockOffset={'15%'}
        helperClass='grabbed'
        lockToContainerEdges
        useDragHandle
        onSortStart={handleSortStart}
        onSortEnd={handleSortEnd}
        items={items} />
    </div>
  )
}

export default connect(({ items }) => ({ items }), (dispatch) => ({
  moveItem: (data) => dispatch(moveItem(data)),
  grabItem: (data) => dispatch(grabItem(data))
}))(FormItems)

const FormItemsList = SortableContainer(({ items }) => (
  <div>
    {items.map((item, index) => (
      <SortableFormItem
        key={item.id}
        index={index}
        item={item} />
    ))}
  </div>
))

const SortableFormItem = SortableElement(FormItem)
