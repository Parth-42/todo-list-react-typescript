import React,{ChangeEvent, useState, FormEvent} from 'react'

interface Props {
    addTodo: AddTodo
}

const AddTodo: React.FC<Props> = ({addTodo}) => {

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
