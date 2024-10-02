import React, { useEffect, useState } from 'react';
import Card from "./Card/card.js";
import './display.css';

export default function Display() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const loadTickets = async () => {
            try {
                const data = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                const response = await data.json();
                setTickets(response.tickets);
                
            } catch (error) {
                console.log("Error fetching Data", error);
                setTickets(false);
            }
        };

        loadTickets();
    },[]);

    const groupedTickets = {
        "No priority": tickets.filter(ticket => ticket.priority === 0),
        "Urgent": tickets.filter(ticket => ticket.priority === 4),
        "High": tickets.filter(ticket => ticket.priority === 3),
        "Medium": tickets.filter(ticket => ticket.priority === 2),
        "Low": tickets.filter(ticket => ticket.priority === 1)
    };

    return (
        <div>
            <div className='header-web'>
                Display
            </div>
            <div className='board'>
                {Object.keys(groupedTickets).map(priority => (
                    <div key={priority} className='column'>
                        <h2 className='column-title'>{priority} {groupedTickets[priority].length}</h2>
                        {groupedTickets[priority].map(ticket => (
                            <Card key={ticket.id} ticket={ticket} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
