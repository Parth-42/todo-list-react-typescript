import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import  './App.css';

const App: React.FC = () => {

  interface Todo{
    text: string,
    isCompleted: boolean
  }

  const initialTodos: Array<Todo> = [{text:'Do the dishes', isCompleted: false}, {text:'Walk the dog', isCompleted: false}]

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
      const newTodos = todos.map(todo => {
        if(todo === selectedTodo){
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        } 
        return todo;
      })
      console.log(selectedTodo)
      setTodos(newTodos);
  }

  const addTodo = (newTodo: string) => {
      newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, isCompleted: false}])
  }

  return (
    <div className="App">
      <h2>Todo List App</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
