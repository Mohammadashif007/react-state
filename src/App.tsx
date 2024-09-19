import TodoForm from "./component/todo/TodoForm";
import TodoList from "./component/todo/TodoList";
import TodoProvider from "./context/todoProvider";

function App() {
    return (
        <TodoProvider>
            <div>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>
        </TodoProvider>
    );
}

export default App;
