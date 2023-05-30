import './AppItem.css'

import { Draggable } from "react-beautiful-dnd"


function AppItem(params) {
  return (
    <Draggable draggableId={params.id} index={params.index} key={params.id}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className='item-container'
        >
          <div className="AppItem">
              <div className='title'>{params.title}</div>
              <div className='item-content'>{params.content}</div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default AppItem
