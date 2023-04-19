import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import handleChange from '../actions/handleChange';


export default function New(props) {
    // Init state with a fresh/blank reminder object -
    // based on our model from server folder
    const [reminder, setReminder] = useState({
        user:"",
        exercise: '',
        description: '',
        duration: '',
        date: new Date().toLocaleDateString()
    });

    //Var access to useNav hook
    const navigate = useNavigate();

    // called from submit button - sends state reminder obj to API - 
    //creating obj in db - navs home when done
    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/create`, reminder )
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate(`/`)
    }

    //exporting logic for modifying state Reminder obj - then setting state
    // to that reminder
    // We do this to save time on repeating code - and its clearer to read
    const changeHandler = event => {
        setReminder(
            handleChange(reminder, event))
        
    }

    return (
        <div>
            {/* Ternary to gracefully await API data from state - loads when
             state is set */}
            {/* we really dont need this when creating a new reminder bc 
            state has initial values - even tho blank */}
            { reminder ?
            <div>
                <input value={reminder.user} onChange={changeHandler} 
                placeholder="UserName" name="user"/>
                <input value={reminder.exercise} onChange={changeHandler} 
                 placeholder="Exercise" name="exercise"/>
                <input value={reminder.description} onChange={changeHandler} 
                 placeholder="Description" name="description"/>
                <input value={reminder.duration} onChange={changeHandler} 
                 placeholder="Duration" name="duration"/>

            <br/>
            <button onClick={submitHandler}>Submit</button>
            </div>

            : <p>Loading reminder....</p>}

        </div>
    )
}