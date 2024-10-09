import React, { useState } from 'react'; // Correct import for React
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CalendarView from './components/CalenderView';
export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Task Remainder</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      <CalendarView />
    </div>
  );
}
