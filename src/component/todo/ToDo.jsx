import { useState } from "react";

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    const addOrEditToDo = () => {
        if(editIndex === null){
            setTodos([...todos, task])
            setTask("")
        }else{
            const newArray = todos.map((item , index) => {
                if(index === editIndex){
                    return task
                }else{
                    return item
                }
            })
            setTodos(newArray)
            removeEdit()
        }
    }

    const remove = (index) => {
        const newArray = todos.filter((_, i) => i != index);
        setTodos(newArray)
    }

    const deleteAll = () => {
        setTodos([])
    }

    const edit = (index) => {
        const element = todos[index]
        setTask(element)
        setEditIndex(index)
    }

    const removeEdit = () => {
        setTask("")
        setEditIndex(null)
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
                <input onClick={addOrEditToDo} type="button" value={`${editIndex === null ? 'Add' : 'Edit'}`} />
                {editIndex != null && (
                    <input onClick={removeEdit} type="button" value="X" />
                )}
            </div>
            <hr />
            <button onClick={deleteAll}>Delete All</button>
            <div>
               <ul>
                {todos.length === 0 && "There is no task available"}
                {todos.map((item, index) => (
                    <li key={index}>
                        <input onClick={() => remove(index)} type="button" value="X" />
                        <input onClick={() => edit(index)} type="button" value="E" />
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