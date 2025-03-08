
import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTodo'

import TaskList from './components/TaskList'
import { initialTasks } from './data/initialTasks';
let nextID=4;

function App() {
    const [tasks, setTasks]=useState(initialTasks);

    const handleAddTask =(text)=>{
      setTasks([
        ...tasks,
        {
          id: nextID++,
          text: text,
          done:false
        }
      ])
}
    const handleChangeTask = (task) =>{
        const changedTask = tasks.map((t)=>{
            if(t.id===task.id){
                return {
                    ...t,
                    text: task.text,
                    done: task.done
                }
            }
            else{
                return t;
                    
                
            }
        });
        setTasks(changedTask);
    };

    const handleDeleteTask =(taskID)=>{
        setTasks(tasks.filter((t)=> t.id!==taskID))
    }

  return (
    <>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList 
        tasks={tasks}
        onChangeTask= {handleChangeTask} 
        onDeleteTask={handleDeleteTask}
        />
    </>
  )
}

export default App
