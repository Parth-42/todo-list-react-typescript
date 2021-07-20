import React,{ChangeEvent, useState, FormEvent} from 'react'

interface addTodoProps {
    addTodo: (newTodo: string) => void
}

const AddTodo: React.FC<addTodoProps> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState<string>("")

    const submitHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <div>
            <input type="text" value={newTodo} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/>
            <button type="submit" onClick={submitHandler}>Add Todo</button>
        </div>
    )
}

export default AddTodo
