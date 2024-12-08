import React, { useState } from "react";
import { Task } from "../models/Task";

interface AddTaskProps {
    onAddTask: (task: Task) => void;
}

function AddTask({onAddTask}: AddTaskProps) {

    const initialFormData = {
        title: "",
        description: "",
        status: "pending"
    };

    const [formData, setFormData] = useState<Task>(initialFormData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onAddTask(formData);
        setFormData(initialFormData);
    }

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <h2 className="text-center">Add tasks</h2>
            <div className="input-group">
                <label htmlFor="title">Title&nbsp;<span className="required">*</span></label>
                <input className="input-text" type="text" name="title" id="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="input-group">
                <label htmlFor="description">Description&nbsp;<span className="required">*</span></label>
                <textarea name="description" id="description" rows={3} value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <div className="p-10 d-flex justify-content-end">
                <button className="add-button">Add task</button>
            </div>
        </form>
    );
}

export default AddTask