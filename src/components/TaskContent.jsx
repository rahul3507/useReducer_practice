import React, { useState } from 'react'

export default function TaskContent({task, onChange}) {
        const [isEditing, setIsEditing]=useState(false);
  return (
    <div>
        {isEditing? (
                <>                    
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
                                    </>) : (
                                            <>
                                            {task.text}
                                            <button onClick={()=>(setIsEditing(true))}>Edit</button>
                                            </>
                                             )}

    </div>
  )
}
