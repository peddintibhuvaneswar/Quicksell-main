import React from 'react';
import "./card.css";

import InProgress from '../Icons/in-progress.svg';
import Done from '../Icons/Done.svg'; 
import Cancelled from '../Icons/Cancelled.svg';
import Backlog from '../Icons/Backlog.svg';
import Todo from '../Icons/To-do.svg'; 

import lowPriorityImage from '../Icons/Img - Low Priority.svg';
import mediumPriorityImage from '../Icons/Img - Medium Priority.svg';
import highPriorityImage from '../Icons/Img - High Priority.svg';
import urgentPriorityImage from '../Icons/SVG - Urgent Priority colour.svg';
import noPriorityImage from '../Icons/No-priority.svg';


export default function Card({ ticket, display }) {

    const update = {

        "In progress": InProgress,
        "Done": Done,
        "Backlog": Backlog,
        "Todo": Todo,
        "Cancelled": Cancelled
    }

    const pImages = {
        "usr-1": "https://avatar.iran.liara.run/public/46",
        "usr-2": "https://avatar.iran.liara.run/public/3",
        "usr-3": "https://avatar.iran.liara.run/public/8",
        "usr-4": "https://avatar.iran.liara.run/public/27",
        "usr-5": "https://avatar.iran.liara.run/public/74",
    };

    const priorityImages = {
        0: noPriorityImage,
        1: lowPriorityImage,
        2: mediumPriorityImage,
        3: highPriorityImage,
        4: urgentPriorityImage
    };

    return (
        <>
            {display === "Priority" ? (
                <div className='card-container'>
                    <div className='card-header'>
                        <div>
                            <div className='upheader'>
                            <p className='c-id'>{ticket.id}</p>
                            <img className='avatar1' src={ pImages[ticket.userId] } alt='.' />
                            </div>
                            <div className='mid'>
                            <img className='imge' src={update[ticket.status]} alt='.'/>
                            <p className='card-title'>{ticket.title}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='card-footer'>
                        <div className='badge'>
                            <span className='icon'></span>
                        </div>
                        <div className='bokkalofeature-request'>{ticket.tag[0]}</div>
                    </div>
                </div>
            ) : display === "Status" ? (
                <div className='card-container'>
                    <div className='card-header'>
                        <div>
                            <div className='upheader'>
                            <p className='c-id'>{ticket.id}</p>
                            <img className='avatar1' src={ pImages[ticket.userId] } alt='avatar' />
                            </div>
                            <p className='card-title'>{ticket.title}</p>
                        </div>
                        
                    </div>
                    <div className='card-footer'>
                        <img className='avatar' src={priorityImages[ticket.priority]} alt='.' />
                        <div className='badge'>
                            <span className='icon'></span>
                        </div>
                        <div className='bokkalofeature-request'>{ticket.tag[0]}</div>
                    </div>
                </div>
            ) : (
                <div className='card-container'>
                    <div className='card-header'>
                        <div>
                            <p className='c-id'>{ticket.id}</p>
                            <div className='mid'>
                            <img className='imge' src={update[ticket.status]} alt='.'/>
                            <p className='card-title'>{ticket.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <img className='avatar' src={priorityImages[ticket.priority]} alt='.' />
                        <div className='badge'>
                            <span className='icon'></span>
                        </div>
                        <div className='bokkalofeature-request'>{ticket.tag[0]}</div>
                    </div>
                </div>
            )}
        </>
    );
}
