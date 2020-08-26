import React from "react"

function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color:"yellow",
        textDecoration: "line-though"
    }
    return(
        
        <div className="App">
        <div className="todo">
        <input className="check" type="checkbox" checked={props.item.completed}
         onChange={() => props.handleChange(props.item.id)} />
        <p className="text" style={props.item.completed ? completedStyle:null}>{props.item.text}</p>
        </div>
        </div>
    )
}

export default TodoItem