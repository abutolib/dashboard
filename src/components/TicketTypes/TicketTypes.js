import './types.css'

export const TicketTypes = ({typeName,number}) => {
  return (
    <li className="ticketTypes-item">
      <h3 className="ticketTypes-item__title">{typeName}</h3>
      <p className="ticketTypes-item__number">{number}</p>
    </li>
  )
}
