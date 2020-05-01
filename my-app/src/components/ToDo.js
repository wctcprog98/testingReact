import React from 'react'

function ToDo(props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <h2>{props.item.text}</h2>
            
            
        </div>
    )
}

export default ToDo; 