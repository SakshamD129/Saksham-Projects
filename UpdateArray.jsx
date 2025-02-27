import React, { useState } from 'react'

function UpdateA() {
    const [tasks, setTasks] = useState([]);

    function afood() {
        const newtask = document.getElementById('hereko').value;
        document.getElementById('hereko').value = "";
        if (newtask == "" || newtask == " ") {
            return;
        }

        setTasks([...tasks, newtask]);
    }

    function tori(index) {
        setTasks(tasks.filter((element, i) => i !== index))
    }
    function moveItemD(index) {
        if (index == tasks.length - 1) {
            return;
        }
        else {
            const temp = tasks[index];
            tasks[index] = tasks[index + 1];
            tasks[index + 1] = temp;
            setTasks([...tasks]);
        }
    }

    function moveItemU(index) {
        if (index == 0) {
            return;
        }
        else {
            const temp = tasks[index - 1];
            tasks[index - 1] = tasks[index];
            tasks[index] = temp;
            setTasks([...tasks]);
        }
    }

    return (
        <div className="herahera">
            <h2 style={{ color: "Red" }}>To-Do List</h2>
            <input type="text" placeholder="biralo" id="hereko" />
            <button className="add-button" onClick={afood}>ADD</button>
            <div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index} className="birali">
                            <input type="checkbox" className='checkmark' />
                            <span className='text'> {task}  </span>
                            <button className="delete-button" onClick={() => tori(index)}>Delete</button>
                            <button onClick={() => moveItemD(index)}>Down</button>
                            <button onClick={() => moveItemU(index)}>Up</button>

                        </li>
                    )}
                </ol>
            </div>
        </div >
    );

}
export default UpdateA