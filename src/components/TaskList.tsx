import React from "react";
import { Task } from "../models/Task";

interface TaskListProps {
    tasks: Task[];
    showTaskDetails: (task: Task) => void;
}

function TaskList({tasks, showTaskDetails}: TaskListProps){
    const handleTaskSelection = (task: Task, e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        showTaskDetails(task)
    }
    return(
        <div className="task-list">
            <h2 className="text-center">Task list</h2>
            <div className="d-flex">
                <div className="task-badge">All</div>
                <div className="task-badge">Pending</div>
                <div className="task-badge">Completed</div>
            </div>
            <ul className="task-list-ul">
                {tasks && tasks.map((task, index)=> (
                    <li key={index}>
                        <div className="d-flex justify-content-between">
                            <span onClick={(e) => handleTaskSelection(task, e)}>{task.title}</span>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList