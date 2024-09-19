import { ChangeEvent, useReducer } from "react";
type TAction = {
    type: string;
    payload: string;
};

const UserInfoWithUseReducer = () => {
    const initialState = {
        name: "",
        age: "",
        hobbies: [] as string[],
    };

    const reducer = (currentState: typeof initialState, action: TAction) => {
        switch (action.type) {
            case "addName":
                return { ...currentState, name: action.payload };

            case "addAge":
                return { ...currentState, age: action.payload };

            case "addHobbies":
                return {
                    ...currentState,
                    hobbies: [...currentState.hobbies, action.payload],
                };

            default:
                return currentState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) =>
                    dispatch({ type: "addName", payload: e.target.value })
                }
                className="border-2 border-gray-500"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
            />
            <input
                onChange={(e) =>
                    dispatch({ type: "addAge", payload: e.target.value })
                }
                className="border-2 border-gray-500"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
            />
            <input
                onBlur={(e) =>
                    dispatch({ type: "addHobbies", payload: e.target.value })
                }
                className="border-2 border-gray-500"
                type="text"
                name="hobbies"
                id="hobbies"
                placeholder="Hobbies"
            />
            <button className="" type="submit">
                Submit
            </button>
        </form>
    );
};

export default UserInfoWithUseReducer;
