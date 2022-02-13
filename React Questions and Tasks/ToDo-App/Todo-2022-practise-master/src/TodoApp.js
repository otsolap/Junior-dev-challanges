import React from 'react';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import { NewTodoForm } from './Components/NewTodoForm';
import Footer from './Components/Footer'
import './App.css';
import useTodoState from './Hooks/useTodoState';


export function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Apply to Buuti', complete: true },
        { id: 2, task: 'Interview call with Pakarinen', complete: true },
        { id: 3, task: 'Create a React ToDo App with hooks', complete: true },
        { id: 4, task: 'Prepare for next interview', complete: false },
        { id: 5, task: 'Get a cool new job', complete: false }
    ]
    const { todos, addTodo, removeTodo, toggleComplete } = useTodoState(initialTodos)

    return (
        <div className="TodoContainer">
            <Navbar />
            <NewTodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
            <Footer />
        </div>
    );
}



export default TodoApp;
