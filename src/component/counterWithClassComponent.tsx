import React from "react";

class CounterWithClass extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        console.log(this);
        const { count } = this.state;
        return (
            <button
                onClick={() => this.setState({ count: count + 1 })}
                className="border-2 p-2"
            >
                {count}
            </button>
        );
    }
}

export default CounterWithClass;
