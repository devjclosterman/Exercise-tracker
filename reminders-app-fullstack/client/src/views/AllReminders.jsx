import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function AllReminders() {
    // Init state
    const [ reminders, setReminders ] = useState(null);

    // Lifecycle - On first render - make API call and set state to AllReminders Obj
    useEffect(() => {
        axios.get('http://localhost:8080/api/all')
            .then(res => {
                console.log(res.data.results);
                setReminders(res.data.results)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div>
            <h1>All Exercise's:</h1>
            <Link to="/new">New</Link>
            {
                // Ternary to gracefully await reminders from API/DB - then display once in state
                reminders ? reminders.map((reminder, i) => {
                    return (
                        <li key={i}>
                            <h2>
                                <Link to={"/" + reminder._id} ref={node => node} >{reminder.user}</Link> </h2>
                                
                                
                        </li>
                )}) : null
            }
        </div>
    )
}
