

const ChildComponent = ({count}: {count: number}) => {
    return (
        <div className="m-10 p-10 border-2 border-green-600">
            {count}
        </div>
    );
};

export default ChildComponent;