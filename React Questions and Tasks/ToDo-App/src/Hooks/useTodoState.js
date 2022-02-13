import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default initialState => {
    const [todos, setTodos] = useState(initialState)
    return {
        todos,
        addTodo: newTodoTask => {
            setTodos([...todos, { id: uuidv4(), task: newTodoTask, complete: false }])
        },
        removeTodo: todoId => {
            const remainingTodos = todos.filter(todo => todo.id !== todoId)
            setTodos(remainingTodos)
        },
        toggleComplete: todoId => {
            const completedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
            )
            setTodos(completedTodos)
        }

    }
}
