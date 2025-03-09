import './App.css'
import AddTask from './components/AddTodo'

import TaskList from './components/TaskList'
import { initialTasks } from './data/initialTasks';
import taskReducer from './reducer/taskReducer';
import { useImmerReducer } from 'use-immer';

let nextID=4;
function App() {
    const [tasks, dispatch]=useImmerReducer(taskReducer, initialTasks)

    const handleAddTask =(text)=>{
      dispatch({
        type: 'added',
        id:nextID++,
        text: text,

      })
}
    const handleChangeTask = (task) =>{
        dispatch({
          type: 'changed',
          task,
        })
    };

    const handleDeleteTask =(taskID)=>{
       dispatch({
        type:'deleted',
        id:taskID,
       })
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
