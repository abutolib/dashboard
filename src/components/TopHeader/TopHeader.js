import { Bring, Search } from "../Navbar/Icons";
import { Person } from "../Person/Person";


export default function TopHeader({title,userName}) {
  return (
    <div className='main-header'>
      <h1 className="overview__title">{title}</h1>
      <div className='person-navbar'>
        <Search/>
        <Bring/>
        <span className='line2'></span>
        <Person name={userName} />
      </div>
    </div>
  )
}
