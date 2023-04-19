import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


export default function OneReminder() {
    
    //Init state
    const [reminder, setReminder] = useState(null);

    //Accessing Params from URL - returns object - { destructuring } to have single variable to use on other page logic
    const { _id } = useParams()
    console.log('_id', _id);
    
    // Accessing useNavigate Hook
    const navigate = useNavigate();

    // Lifecycle: on first render - get reminder from DB with _id var from Params
    useEffect(() => {
        axios.get(`http://localhost:8080/api/${_id}`)
            .then(res => {
                console.log(res.data);
                setReminder(res.data) // update state from API reminder data 
            })
            .catch(err => console.log(err))
    }, [])

    // Handling Delete function - sends API req - nav back to home after - called from delete button
    const deleteHandler = e => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/delete/${_id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate("/")
    }

    return (
        <div>
            <Link to={"/"} >Go Home</Link>
            {/*  Ternary to gracefully handle the loadtime from our useEffect retrieving API data and setting it to state */}
            { reminder ?
            <div>
            <h1> {reminder.user}</h1>
            <h4>{reminder.exercise}</h4>
            <h4>{reminder.description}</h4>
            <h4>{reminder.duration}</h4>
            <br/>
        <button><Link to={`/edit/${_id}`} > Edit </Link></button> 
        <span>   </span>
            <button onClick={deleteHandler}>Delete</button>
            </div>

            : <p>Loading reminder....</p>}

        </div>
    )
}
