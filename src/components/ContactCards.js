import React from "react";

function ContactCards({contact: {name, imgUrl, imgAlt, phone, email}}) {
  return (
    <div className={'contact-card'}>
      <img src={imgUrl} alt={imgAlt} />
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default ContactCards;
