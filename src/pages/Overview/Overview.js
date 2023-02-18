import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { TicketTypes } from '../../components/TicketTypes/TicketTypes'
import TopHeader from '../../components/TopHeader/TopHeader'
import './Overview.css'
import Graph from '../.././assets/images/graph.svg'
import { List } from '../../components/List/List'
import { Item } from '../../components/Item/Item'
import Modal from '../../components/Modal/Modal'

export const Overview = () => {

  const ticketsType = [
    {
      name: "Unresolved",
      number: 60,
    },
    {
      name: "Overdue",
      number: 16,
    },
    {
      name: "Open",
      number: 43,
    },
    {
      name: "On hold",
      number: 64,
    },
  ]

  const times = [
    {
      name: "Resolved",
      number: 449,
    },
    {
      name: "Received",
      number: 426,
    },
    {
      name: "Average first response time",
      number: '33m',
    },
    {
      name: "ResolAverage response timeved",
      number: '3h 8m',
    },
    {
      name: "Resolution within SLA",
      number: '94 %',
    },
  ]

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const lineColor = useRef()
  const line2Color = useRef()
  const inputValue = useRef()
  const modalBtn = useRef()

  

  const changeColor = () => {
    if (lineColor.current.className == 'line3') {
      lineColor.current.className = 'line3-active'
      line2Color.current.className = 'line3'
    } else {
      lineColor.current.className = 'line3'
      line2Color.current.className = 'line3-active'
    }
  }

  let show = true

  const modalShow = () => {
    // show = !show
    // if(show){
    //   console.log(addBtn.current.className);
    // }
    console.log(modalBtn);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const todo = {
      id: todos.at(-1)?.id + 1 || 1,
      text: inputValue.current.value,
      isCompleted: false
    }

    setTodos([ todo,...todos,])

    inputValue.current.value = ""
  }
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos))

  return (
    <>
      <TopHeader title="Overview" userName="Jones Ferdinand" />
      <div className='tickets-types'>
        <ul className='tickets-types__list'>
          {
            ticketsType.map((type) =>
              <TicketTypes key={type.name} typeName={type.name} number={type.number} />
            )
          }
        </ul>
      </div>
      <div className='box1'>
        <div className='box1-left'>
          <h3 className='trends-title'>Today’s trends</h3>
          <div className='todays-trends'>
            <span className='dates'>as of 25 May 2019, 09:41 PM</span>
            <div className='date'>
              <button onClick={changeColor} className='todayy'>
                <span ref={lineColor} className='line3-active'></span>
                <p className='today'>Today</p>
              </button>
              <button onClick={changeColor} className='todayy'>
                <span ref={line2Color} className='line3'></span>
                <p className='yesterday'>Yesterday</p>
              </button>
            </div>
          </div>
          <img src={Graph} />
        </div>
        <div className='box1-right'>
          <ul className='box1-right__list'>
            {
              times.map((item) => (
                <li key={item.name} className='box1-right__item box1-right-item'>
                  <h4 className='box1-right-item__title'>{item.name}</h4>
                  <p className='box1-right-item__number'>{item.number}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='flex'>
        <div className='box2'>
          <div className='flex'>
            <h3 className='box2__title'>Unresolved tickets</h3>
            <Link to='/overview/details' className='details'>View details</Link>
          </div>
          <span style={{ display: "block", marginBottom: "36px" }}><span style={{ color: "#9FA2B4" }}>Group</span>: Support</span>
          <ul className='list'>
            <li className='flex list-item'>
              <p>Waiting on Feature Request</p>
              <p>4238</p>
            </li>
            <li className='flex list-item'>
              <p>Awaiting Customer Response</p>
              <p>1005</p>
            </li>
            <li className='flex list-item'>
              <p>Awaiting Developer Fix</p>
              <p>914</p>
            </li>
            <li className='flex list-item'>
              <p>Pending</p>
              <p>281</p>
            </li>
          </ul>
        </div>
        <div className='box2'>
          <div className='flex'>
            <h3 className='box2__title'>Tasks</h3>
            <Link to='/overview/all' className='details'>View all</Link>
          </div>
          <span style={{ display: "block", marginBottom: "36px", color: "#9FA2B4" }}>Today</span>

          <form className='form' onSubmit={handleSubmit}>
            <div className='flex'>
              <input required ref={inputValue} className='input' type='text' placeholder='Create new task' />
              <button type='button' onClick={()=>modalShow()} className='add-btn'>Add
              </button>
            </div>
          </form>
          {
            todos.length ? (
              <List>
                {
                  todos.map((todo) => <Item todos={todos} id={todo.id} isCompleted={todo.isCompleted} setTodos={setTodos} key={todo.id} text={todo.text} />)
                }
              </List>
            ) : <h2 className='text-center my-5'>Todolar yo'q</h2>
          }
        </div>
      </div>
    </>

  )
}

