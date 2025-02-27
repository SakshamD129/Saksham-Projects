import { useState, createContext } from 'react';

import ReactHookA from './ReactHookA.jsx';

export const UserContext = createContext();
function ReactHook3() {
    const [name, setName] = useState("Biralo");
    return (
        <div className="box">
            <h1>Parent 1</h1>
            <h2>{`Hello ${name}`}</h2>
            <UserContext.Provider value={name}>
                <ReactHookA />
            </UserContext.Provider>
        </div>
    );

}
export default ReactHook3