import React from 'react'

interface Todo{
    text: string, 
    isCompleted: boolean
}

interface Props{
    todo : {
        text: string;
        isCompleted: boolean;
    },
    toggleTodo: (selectedTodo: Todo) => void;
}

const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {

    return (
        <li>
            <label className={todo.isCompleted ? "complete" : undefined}>
                {todo.text}
                <input type="checkbox"  onClick={()=> toggleTodo(todo)}/>
                <p>{todo.isCompleted}</p>
            </label>
        </li>
    )
}

export default TodoListItem
