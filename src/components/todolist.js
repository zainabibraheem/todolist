import React, {useState} from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import {BiPencil} from 'react-icons/bi'

function Todolist() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

function addTask(todo){
 const newTodo= {
    id: Math.random(),
    todo: todo
 }

  setList([...list, newTodo])

  setInput("")

}

const submitForm = (event)=>{event.preventDefault()}

const deletetodo = (id) => {
  const newList = list.filter((todo) => todo.id !== id )
  setList(newList)
}

  return (
    <form className='todolist' onSubmit={submitForm} > 
      <h1 className='todo-title'>Todolist App</h1>
      <div className='input-div'>
      <input className='todo-input'
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
      <button className='todo-button' onClick={()=>addTask(input)}>Add task</button>
      
      </div>

      <div className='input-list'>
      <ul className='list'>
        {list.map((todo)=>{return <li key={todo.id}>{todo.todo} <span><BiPencil /> 
        <MdDeleteOutline onClick={() => deletetodo(todo.id)}/></span> </li>})}
      </ul>
      </div>
      
    </form>
  )
}

export default Todolist
