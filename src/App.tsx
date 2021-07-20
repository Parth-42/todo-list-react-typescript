import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import  './App.css';

const App: React.FC = () => {

  const initialTodos: Array<Todo> = [{text:'Do the dishes', isCompleted: false}, {text:'Walk the dog', isCompleted: false}]

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
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

  const addTodo: AddTodo = (newTodo) => {
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
