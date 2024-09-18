import ChildComponent from "./childComponent";

type TProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CounterWithFuncComponent = ({count, setCount}: TProps) => {
    return (
        <div
            className="border-2 border-purple-700 m-10 p-10"
            onClick={() => setCount((prev) => prev + 1)}
        >
           <button className="border-2 p-2"> Click and Update</button>
           <ChildComponent count={count}></ChildComponent>
        </div>
    );
};

export default CounterWithFuncComponent;
