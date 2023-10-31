"use client"
import React from 'react'

import { useState } from 'react'

const page = () => {
const [Title, settitle] = useState("")
const [Desc, setdesc] = useState("")
const [Maintask, setMaintask] = useState([])
const submitHandler = (e)=>{
  e.preventDefault()
  setMaintask([...Maintask , {Title,Desc}])
  settitle("")
  setdesc("")
  console.log(Maintask)

}

const deleteHandler = (i) =>{
  let copytask = [...Maintask]
  copytask.splice(i,1)
  setMaintask(copytask)

}


let rendertask = <h2>No Task Available</h2>
            if (Maintask.length>0){
             rendertask = Maintask.map((t,i)=>{
              return (
              <li key={i} className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-between mb-5 w-2/3">
                  <h5 className="text-2xl font-semibold0">{t.Title}</h5>
                  <h6 className="text-lg font-semibold0">{t.Desc}</h6>
                  </div>
                  <button
                  onClick={()=>{
                    deleteHandler(i)
                  }} 
                  className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
                  </li>);
              
});
}
  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl text-center  font-bold'>Shivang's ToDoList</h1> 
      <form onSubmit={submitHandler}>
        <input type='text' 
         className='text-2xl border-zinc-800 border-2 m-8 px-2 py-4' 
         placeholder='Enter Task Here'
         value={Title}
         onChange={(e)=>{
          settitle(e.target.value)
         }}/>
        <input type='text' 
        className='text-2xl border-zinc-800 border-2 m-8 px-2 py-4' 
        placeholder='Enter Discription Here'
        value={Desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
        </form>
        <hr/>
        <div className='bg-slate-200 p-8'>
          <ul>
            {rendertask}
          </ul>
          </div>    
    </>
  )
}

export default page