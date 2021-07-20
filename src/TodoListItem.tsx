import React from 'react'

interface Props{
    todo : Todo,
    toggleTodo: ToggleTodo
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
