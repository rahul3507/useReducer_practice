import React from 'react'
import TaskContent from './TaskContent';

export default function Task({task, onChange , onDelete}) {
    
 
                                    
  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e)=>onChange({
        ...task,
        done: e.target.checked
      })}/>
      
      <TaskContent task={task} onChange={onChange}/>
    

      <button onClick={()=>(onDelete(task.id))}>Delete</button>
    </>
  )
}
