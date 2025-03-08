import React, { useState } from 'react'

export default function Task({task, onChange , onDelete}) {
    const [isEditing, setIsEditing]=useState(false);
    const taskContent = isEditing? (<>
                                        <input 
                                                type="text"
                                                value={task.text}
                                                key={task.id}
                                                onChange={(e) => onChange({
                                                    ...task,
                                                    text: e.target.value,

                                                })}    
                                                    />
                                        <button onClick={()=>(setIsEditing(false))}>Save</button>
                                    </>) : (<>
                                            {task.text}
                                            <button onClick={()=>(setIsEditing(true))}>Edit</button>
                                         </>
                                             )

 
                                    
  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e)=>onChange({
        ...task,
        done: e.target.checked
      })}/>

     {taskContent}

      <button onClick={()=>(onDelete(task.id))}>Delete</button>
    </>
  )
}
