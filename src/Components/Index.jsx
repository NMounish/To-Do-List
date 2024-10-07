import React, { useState } from 'react';
import './index.css';

function Index () 
{
    const[Task,setTask]=useState('');
    const[submitted,setSubmitted]=useState('');
    const[deleted,setDeleted]=useState('');


    const handleChange=(event)=>{
      setTask(event.target.value);
    };

    const submit=()=>{
      setSubmitted(Task);
    };

    const deleting=()=>{
      setDeleted(setSubmitted);
    }

  return (
    <div>
        <h1>To-Do</h1>
        <label>Enter the work:
        <input type='text' placeholder='Enter the work' value={Task} onChange={handleChange}/>
        </label>
        <button onClick={submit}>Submit</button>
        <button className="delete" onClick={deleting}>Delete</button>

        <p>Your Work:{submitted}</p>
        </div>
      
  )
}

export default Index;
