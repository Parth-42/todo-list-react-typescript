type Todo = {
    text: string
    isCompleted: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (newTodo: string) => void