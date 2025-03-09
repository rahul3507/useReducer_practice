
import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../reducer/taskReducer";
import {initialTasks} from "../data/initialTasks"

let nextID=4;

export const TasksContext= createContext(null);

export default function TaskProvider({ children }){
const [tasks, dispatch]=useImmerReducer(taskReducer, initialTasks);
    
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
    <TasksContext.Provider 
                        value={
                            {
                                tasks,
                                onAddTask: handleAddTask,
                                onChangeTask: handleChangeTask,
                                onDeleteTask: handleDeleteTask,

                            }
                        }>{children}</TasksContext.Provider>
                      );
}

export const useTasks = ()=>{
  return useContext(TasksContext);
}