import { useState } from "react";

const CounterWithFuncComponent = () => {
    const [count, setCount] = useState(0);
    return <div className="border-2 p-2" onClick={() => setCount(prev => prev + 1)}>{count}</div>;
};

export default CounterWithFuncComponent;
