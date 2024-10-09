import React, { useState } from 'react'
import DatePicker from 'react-date-picker'


export default function TaskForm({addtask}) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: new Date(),
        remainderTime: 5,
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.title.trim() && task.description.trim()) {
          addTask(task);
          
          // Schedule a notification based on reminder time
          const timeDifference = new Date(task.dueDate) - new Date() - task.reminderTime * 60000;
          if (timeDifference > 0) {
            setTimeout(() => {
              new Notification(`Reminder: ${task.title}`, {
                body: `Your task "${task.title}" is due in ${task.reminderTime} minutes.`
              });
            }, timeDifference);
          }
      
          setTask({ title: '', description: '', dueDate: new Date(), reminderTime: 5 });
        }
      };
      
  return (
    <>

    <form className='form' onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Title'
            value={task.title}
            onChange={(e) => setTask({...task, title: e.target.value})}
        />
        <input
            type="text"
            placeholder='Description'
            value={task.description}
            onChange={(e) => setTask({...task, description: e.target.value})}
        />
        <DatePicker
            value={task.dueDate}
            onChange={date => setTask({...task, dueDate: date})}
        />
        <input
            type="number"
            placeholder='Remainder Time (in minutes)'
            value={task.remainderTime}
            onChange={(e) => setTask({...task, remainderTime: parseInt(e.target.value)})}
        />
        <button>Add Task</button>
    </form>



    </>

  )
}
