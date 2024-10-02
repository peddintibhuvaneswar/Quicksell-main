import React from 'react';
import Card from "../Card/card.js";
import './Priority.css';

import add from "../Icons/add.svg";
import dots from "../Icons/3 dot menu.svg"

export default function Priority({ tickets, ordering }) {

    const groupedTickets = {
        "Bhuvan": tickets.filter(ticket => ticket.userId === "usr-1"),
        "Gowtham": tickets.filter(ticket => ticket.userId === "usr-2"),
        "Praveen": tickets.filter(ticket => ticket.userId === "usr-3"),
        "Santosh": tickets.filter(ticket => ticket.userId === "usr-4"),
        "bhargav": tickets.filter(ticket => ticket.userId === "usr-5")
    };

    const priorityImages = {
        "Bhuvan": "https://avatar.iran.liara.run/public/46",
        "Gowtham": "https://avatar.iran.liara.run/public/3",
        "Praveen": "https://avatar.iran.liara.run/public/8",
        "Santosh": "https://avatar.iran.liara.run/public/27",
        "bhargav": "https://avatar.iran.liara.run/public/74"
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
                            <img src={priorityImages[priority]} alt='.' className='priority-image' style={{ width: "24px", height: "24px"}}/>
                            <h2 className='column-title'>{priority} {groupedTickets[priority].length}</h2>
                            <img src={add} alt='+' className='priority-plus'/>
                            <img src={dots} alt='...'/>
                        </div>
                        {groupedTickets[priority].map(ticket => (
                            <Card key={ticket.id} ticket={ticket} display="User"/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
