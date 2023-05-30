import "./App.css"

import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import AppColumn from "./components/AppColumn";


const defaultColumns = [
  {
    name: "A Fazer",
    id: "1",
    items: [{id: '11', title: 'Exemplo 1', content: 'Esse é o exemplo 1.'},
            {id: '12', title: 'Exemplo 2', content: 'Esse outro é o exemplo 2.'},
            {id: '13', title: 'Exemplo 3', content: 'Aqui podemos ver o exemplo 3.'}],
  },
  {
    name: "Fazendo",
    id: "2",
    items: [{id: '21', title: 'Exemplo 1', content: 'Esse é o exemplo 1.'},
            {id: '22', title: 'Exemplo 2', content: 'Esse outro é o exemplo 2.'},
            {id: '23', title: 'Exemplo 3', content: 'Aqui podemos ver o exemplo 3.'}],
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
          <AppColumn id={column.id} name={column.name} items={column.items}/>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
