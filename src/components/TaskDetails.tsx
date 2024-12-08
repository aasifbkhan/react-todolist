import { Task } from "../models/Task";

interface taskDetailsProp {
    task: Task | undefined;
}

function TaskDetails({task}: taskDetailsProp){
    return(
        <div className="task-details">
            <h2 className="text-center">Task Details</h2>
            <div className="task-details-panel">
                <h3>{task?.title}</h3>
                <p>{task?.description}</p>
            </div>
        </div>
    );
}

export default TaskDetails;