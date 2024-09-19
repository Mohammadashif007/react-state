import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/todoProvider";

const TodoForm = () => {
    const { 
        state,
        dispatch
     } = useContext(TodoContext);
     console.log(state);
    const [task, setTask] = useState("");
   

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const todo = {
            id: Math.random().toString().substring(2, 8),
            title: task,
            isCompleted: false,
        };
        dispatch({type: "addTodo", payload: todo})
    };

    return (
        <div>
            <h1>Add todo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    Todo
                </label>
                <input
                     className="border-2 border-cyan-700"
                    type="text"
                    name="todo"
                    id="todo"
                    onBlur={(e) => setTask(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;
