import { useState } from "react";
import CounterWithFuncComponent from "./component/counterWithFuncComponent";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-10 m-10 border-2 border-purple-700">
            <p>Counter : {count}</p>
            <CounterWithFuncComponent
                count={count}
                setCount={setCount}
            ></CounterWithFuncComponent>
        </div>
    );
}

export default App;
