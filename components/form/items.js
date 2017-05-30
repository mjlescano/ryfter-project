import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import FormItem from './item'

export default ({
  items,
  onMove,
  onGrab,
  onSelect
}) => {
  const handleSortStart = ({ index }) => {
    // Hack to have the grab hand when moving an item
    document.body.classList.add('item-grabbed')
    onGrab({ index })
  }

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    // Hack to have the grab hand when moving an item
    document.body.classList.remove('item-grabbed')
    onMove({ oldIndex, newIndex })
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
      <FormItems
        lockAxis={'y'}
        lockOffset={'15%'}
        helperClass='grabbed'
        lockToContainerEdges
        useDragHandle
        onSortStart={handleSortStart}
        onSortEnd={handleSortEnd}
        onSelect={onSelect}
        items={items} />
    </div>
  )
}

const FormItems = SortableContainer(({ items, onSelect }) => (
  <div>
    {items.map((item, index) => (
      <SortableFormItem
        key={item.id}
        index={index}
        onSelect={onSelect}
        item={item} />
    ))}
  </div>
))

const SortableFormItem = SortableElement(FormItem)
