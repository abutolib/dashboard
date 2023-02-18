import { Route, Routes } from 'react-router-dom'
import { Overview } from '../../pages/Overview/Overview'
import { Tickets } from '../../pages/Tickets/Tickets'
import {Error} from '../Error/Error'
import './Main.css'
export const Main = () => {
  return (
    <main className="site-main">
      <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/' element={<Overview/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
  )
}