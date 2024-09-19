import { useContext } from "react";
import { TodoContext } from "../../context/todoProvider";

type TTodo = {
    id: string;
    title: string;
    isCompleted: boolean;
};



const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);
    console.log(state);
    return (
        <div>
            {state.map((item: TTodo) => (
                <p
                    className={`cursor-pointer ${
                        item.isCompleted ? "line-through" : null
                    }`}
                    onClick={() =>
                        dispatch({ type: "taskCompleted", payload: item.id })
                    }
                >
                    {item.title}
                </p>
            ))}
        </div>
    );
};

export default TodoList;
