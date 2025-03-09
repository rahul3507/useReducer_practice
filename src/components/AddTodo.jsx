import React, {  useState } from 'react'
import {   useTasks } from '../contexts/TasksContext';



export default function AddTask() {
   const [text,setText]=useState("");
   const { onAddTask }= useTasks();
  return (
    <>
      <input
         type="text"
         placeholder="Add task "
         value={text}
         onChange={(e)=>setText(e.target.value)}
         />
      <button 
                onClick={()=>{onAddTask(text);
                              setText("");
                              }
                        }
              
              >Add</button>
    </>
  )
}

