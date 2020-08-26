import React, {useState} from "react";
import "./App.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import List from "./List";

const Todolist = ()=>{

    const [item, setItem] = useState("");
    const  [newitem, setNewItem] = useState([]);
    const itemEvent = (event) =>{
        setItem(event.target.value)
    };
    const listofitems= ()=>{
        setNewItem((prevValue)=>{
            return [...prevValue, item]
        });
        setItem("   ");
    };
    return(
        <div className="main_div">
        <div className="center_div">
        

        <br/>
        <h1> Todo List</h1>

        <br/>
        <input type="text" value={item} placeholder="Add an item" onChange={itemEvent} />
        <Button className="newBtn " onClick={listofitems}>
        {/* <button className="btn btn-dark">Click Me</button> */}
              <AddIcon/>
            </Button>
            <br/>
             <ol>

    {newitem.map((val,index)=>{
        return <List key={index} text={val}/>;
    }) }
             </ol>
             <br/>

        </div>

        </div>
    );
};















export default Todolist