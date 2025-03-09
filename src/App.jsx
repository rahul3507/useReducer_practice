import './App.css'
import AddTask from './components/AddTodo'

import TaskList from './components/TaskList'
import TaskProvider from './contexts/TasksContext';


function App() {
    
  return (
    <div>
    <TaskProvider>
      <AddTask />
      <TaskList/>
    </TaskProvider>
    </div>
  )
}

export default App
