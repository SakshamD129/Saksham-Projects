import React, { useContext } from 'react';
import { UserContext } from './ReactHook3.jsx';

function ReactHook3C() {
    const value = useContext(UserContext);
    return (
        <div className="box">
            <h1> Parent 4</h1>
            <h2>{`Bye ${value}`}</h2>
        </div>
    );

}
export default ReactHook3C