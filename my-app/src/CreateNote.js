import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function CreateNote(props) {
    let deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="column">
                <div className="card">
                    <h1>{props.title} 💡</h1>
                    <p>{props.content}</p>
                    
                        <DeleteOutlineIcon  onClick={deleteNote} className="DeleteOutlineIcon"/>
                    
                </div>
            </div>
        </>
    )
}

export default CreateNote
