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

function App() {
  const [columns] = useState(defaultColumns);

  return (
    <div className="App">
      <DragDropContext>
        {columns.map((column, index) => (
          <div class='column'>
            <h1 class='name'>{column.name}</h1>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} class='column-content'>
                  {column.items.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          class='item'
                        >
                          <div class='title'>{item.title}</div>
                          <div class='item-content'>{item.content}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
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
