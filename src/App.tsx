import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'
import TaskList from './components/TaskList'
import { Task } from './models/Task'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task | undefined>();

  const handleSubmit = (newTask:Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const onShowTaskdetails = (task: Task) => {
    setTask(task);
  }

  return (
    <>
      <header>
        <h1 className='text-center'>To-Do List App</h1>
      </header>
      <div className='grid-container'>
        <AddTask onAddTask={handleSubmit} />
        <TaskList tasks={tasks} showTaskDetails={onShowTaskdetails} />
        <TaskDetails task={task} />
      </div>
    </>
  )
}

export default App
