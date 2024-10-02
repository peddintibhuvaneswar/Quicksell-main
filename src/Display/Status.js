import React from 'react';
import Card from "../Card/card.js";
import './Priority.css';

import Backlog from '../Icons/Backlog.svg';
import Todo from '../Icons/To-do.svg'; 
import InProgress from '../Icons/in-progress.svg';
import Done from '../Icons/Done.svg'; 
import Cancelled from '../Icons/Cancelled.svg'; 
import add from "../Icons/add.svg";
import dots from "../Icons/3 dot menu.svg"

export default function Status({ tickets, ordering }) {

    const groupedTickets = {
        "Backlog": tickets.filter(ticket => ticket.status === "Backlog"),
        "Todo": tickets.filter(ticket => ticket.status === "Todo"),
        "In-Progress": tickets.filter(ticket => ticket.status === "In progress"),
        "Done": tickets.filter(ticket => ticket.status === "Done"),
        "Cancelled": tickets.filter(ticket => ticket.status === "Cancelled")
    };

    const priorityImages = {
        "Backlog": Backlog,
        "Todo": Todo,
        "In-Progress": InProgress,
        "Done": Done,
        "Cancelled": Cancelled
    };

    Object.keys(groupedTickets).forEach(priority => {
        if (ordering === 'Priority') {
            groupedTickets[priority].sort((a, b) => b.priority - a.priority);
        } else if (ordering === 'Title') {
            groupedTickets[priority].sort((a, b) => a.title.localeCompare(b.title));
        }
    });

    return (
        <div>
            <div className='board'>
                {Object.keys(groupedTickets).map(priority => (
                    <div key={priority} className='column'>
                        <div className='row-of-title'>
                            <img src={priorityImages[priority]} alt='.' className='priority-image'/>
                            <h2 className='column-title'>{priority} {groupedTickets[priority].length}</h2>
                            <img src={add} alt='+' className='priority-plus'/>
                            <img src={dots} alt='...'/>
                        </div>
                        {groupedTickets[priority].map(ticket => (
                            <Card key={ticket.id} ticket={ticket} display="Status"/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}