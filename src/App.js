import "./App.css";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const defaultColumns = [
  {
    name: "A Fazer",
    id: "1",
    items: [{id: '11', title: 'Exemplo 1', content: 'Esse é o exemplo 1.'},
            {id: '12', title: 'Exemplo 2', content: 'Esse outro é o exemplo 2.'}],
  },
  {
    name: "Fazendo",
    id: "2",
    items: [{id: '21', title: 'Exemplo 3', content: 'Aqui temos o exemplo 3.'},],
  },
  {
    name: "Feito",
    id: "3",
    items: [],
  }
];


const reorder = (list, startIndex, endIndex) => {
  var result = Array.from(list)
  const [item] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, item)
  
  return result
}


function App() {
  const [columns] = useState(defaultColumns);

  const onDragEnd = (result) => {
    // console.log(result)
    if (!result.destination) {
      return;
    }

    // var columnsList = Array.from(columns)
    // const sourceColumnIndex = columns.prototype.findIndex(
    //   columns.filter((column) => column.id === result.source.droppableId)
    // )

    // console.log(sourceColumnIndex)
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <div className='column'>
            <h1 className='name'>{column.name}</h1>
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} className='column-content'>
                  {column.items.map((item, index) => (
                    <Draggable draggableId={item.id} index={index} key={item.id}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className='item'
                        >
                          <div className='title'>{item.title}</div>
                          <div className='item-content'>{item.content}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
