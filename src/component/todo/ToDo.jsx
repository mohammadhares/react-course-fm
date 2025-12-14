import { useState } from "react";

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")

    const addToDo = () => {
        setTodos([...todos, task])
        setTask("")
    }

    const remove = (index) => {
        const newArray = todos.filter((_, i) => i != index);
        setTodos(newArray)
    }

    return ( 
        <>
            <h5>Todo Application : {task}</h5>
            <hr />
            <div>
                <input 
                    type="text" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                />
                <input onClick={addToDo} type="button" value="Add" />
            </div>
            <hr />
            <button>Delete All</button>
            <div>
               <ul>
                {todos.length === 0 && "There is no task available"}
                {todos.map((item, index) => (
                    <li key={index}>
                        <input onClick={() => remove(index)} type="button" value="X" />
                        &nbsp;
                        {item}
                    </li>
                ))}
               </ul>
            </div>
        </>
     );
}
 
export default ToDo;