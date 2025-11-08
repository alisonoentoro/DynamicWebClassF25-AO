import { useContext } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodosContext from './context/todos'

const App = () => {
  const { todos, createTodo, deleteTodoById, editTodoById } = useContext(TodosContext)

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App
