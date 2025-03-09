import React from 'react'
import TaskContent from './TaskContent';
import {   useTasks } from '../contexts/TasksContext';

export default function Task({task}) {
    
  const {onChangeTask, onDeleteTask}= useTasks();
                                    
  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e)=>onChangeTask({
        ...task,
        done: e.target.checked
      })}/>

      <TaskContent task={task} />
    

      <button onClick={()=>(onDeleteTask(task.id))}>Delete</button>
    </>
  )
}
