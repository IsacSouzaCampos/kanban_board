import './AppColumn.css'
import AppItem from "./AppItem"

import { Droppable } from "react-beautiful-dnd"


function AppColumn(props) {
    return (
        <div className='column'>
            <h1 className='name'>{props.name}</h1>
            <Droppable droppableId={props.id} key={props.id}>
                {(provided) => (
                <div ref={provided.innerRef} className='column-content'>
                    {props.items.map((item, index) => (
                        <AppItem title={item.title} content={item.content} id={item.id} index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
        </div>
    )
}

export default AppColumn
