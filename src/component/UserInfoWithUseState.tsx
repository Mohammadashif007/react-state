import { useState } from "react";

const UserInfoWithUseState = () => {
    const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });
    console.log(user);
    return (
        <form>
            <input
                onChange={(e) => setUser({...user,name: e.target.value})}
                className="border-2 border-gray-500"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
            />
            <input
                onChange={e => setUser({...user, age: e.target.value})}
                className="border-2 border-gray-500"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
            />
            <input
                onBlur={e => setUser({...user, hobbies: [...user.hobbies, e.target.value]})}
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

export default UserInfoWithUseState;
