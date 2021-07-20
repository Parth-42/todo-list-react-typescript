import React from 'react'
import TodoListItem from './TodoListItem'

interface Todo{
    text: string, 
    isCompleted: boolean
}

interface Props {
    todos: Array<Todo>,
    toggleTodo: (selectedTodo: Todo) => void;
}

const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul> { todos.map(todo => {
           return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        }) } </ul>
    )
}

export default TodoList
