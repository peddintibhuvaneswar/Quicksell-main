import React from 'react';
import Card from "../Card/card.js";
import './Priority.css';

import verylesspriorityimage from '../Icons/No-priority.svg';
import lesspriorityimage from '../Icons/Img - Low Priority.svg';
import okaypriorityimage from '../Icons/Img - Medium Priority.svg';
import goodpriorityimage from '../Icons/Img - High Priority.svg';
import greatpriorityimage from '../Icons/SVG - Urgent Priority colour.svg';

import add from "../Icons/add.svg";
import dots from "../Icons/3 dot menu.svg"

export default function Priority({ tickets, ordering }) {

    const groupedTickets = {
        "No priority": tickets.filter(ticket => ticket.priority === 0),
        "Low": tickets.filter(ticket => ticket.priority === 1),
        "Medium": tickets.filter(ticket => ticket.priority === 2),
        "High": tickets.filter(ticket => ticket.priority === 3),
        "Urgent": tickets.filter(ticket => ticket.priority === 4)
    };

    const priorityImages = {
        "No priority": verylesspriorityimage,
        "Low": lesspriorityimage,
        "Medium": okaypriorityimage,
        "High": goodpriorityimage,
        "Urgent": greatpriorityimage
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
            <div className='board_of_priority_display'>
                {Object.keys(groupedTickets).map(priority => (
                    <div key={priority} className='column'>
                        <div className='row-of-title'>
                            <img src={priorityImages[priority]} alt='.' className='priority-image'/>
                            <h2 className='column-title'>{priority} {groupedTickets[priority].length}</h2>
                            <img src={add} alt='+' className='priority-plus'/>
                            <img src={dots} alt='...'/>
                        </div>
                        {groupedTickets[priority].map(ticket => (
                            <Card key={ticket.id} ticket={ticket} display="Priority"/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
