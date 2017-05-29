import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import FormItem from './item'

export default ({ onMove, onGrab, items }) => {
  const handleSortStart = ({ index }) => {
    document.body.classList.add('grabbing')
    onGrab({ index })
  }

  const handleSortEnd = ({ oldIndex, newIndex }, evt) => {
    document.body.classList.remove('grabbing')
    onMove({ oldIndex, newIndex })
  }

  return (
    <FormItems
      lockAxis={'y'}
      lockOffset={'15%'}
      helperClass='grabbing'
      lockToContainerEdges
      onSortStart={handleSortStart}
      onSortEnd={handleSortEnd}
      items={items} />
  )
}

const FormItems = SortableContainer(({ items }) => (
  <div>
    {items.map((item, index) => (
      <SortableFormItem key={item.id} index={index} item={item} />
    ))}
  </div>
))

const SortableFormItem = SortableElement(FormItem)
