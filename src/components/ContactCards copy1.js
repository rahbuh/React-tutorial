import React from 'react';

const ContactCard = (props) => {
    return (
        // <div className="contact-card">
        //     <img src={props.contact.imgUrl} alt={props.contact.imgAlt}/>
        //     <h3>{props.contact.name}</h3>
        //     <p>Phone: {props.contact.phone}</p>
        //     <p>Email: {props.contact.email}</p>
        // </div>
        <div className="contact-card">
            <img src={props.imgUrl} alt={props.imgAlt}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;