
import Jonos from '../.././assets/images/jonos.png'
import './Person.css'
export const Person = ({name}) => {
  return (
    <div className="about-person">
      <p>{name}</p>
      <img src={Jonos}/>
    </div>
  )
}
