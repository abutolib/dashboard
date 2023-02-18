import './List.css'

export const List = ({ children }) => {
  return (
    <ul className="todo-list">
      {children}
    </ul>
  )
}