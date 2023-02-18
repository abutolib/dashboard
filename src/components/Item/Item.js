import './Item.css'

export const Item = ({ todos, setTodos, id, text, isCompleted }) => {

  const handleEdit = (todoId) => {
    const newTodo = prompt("Yangi todoni kiriting : ")
    const findedItem = todos.find((todo) => todo.id == todoId)
    findedItem.text = newTodo;
    setTodos([...todos])
  }

  const handleClick = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos([...filteredTodos])
  }
  const handleChange = (todoId) => {
    const findedItem = todos.find((todo) => todo.id === todoId)
    findedItem.isCompleted = !findedItem.isCompleted
    setTodos([...todos])
  }

  return (
    <li className="todo-item">
      <input onChange={() => handleChange(id)} checked={isCompleted} className="form-check-input" type="checkbox" />
      <span className= 'todo-text' >{text}</span>
      <button onClick={() => handleEdit(id)} className="btn urgent-btn">Urgent</button>
    </li>
  )
}