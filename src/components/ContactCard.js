import React, { Component } from "react";

// function ContactCard({contact: {name, imgUrl, imgAlt, phone, email}}) {
//   return (
//     <div className={'contact-card'}>
//       <img src={imgUrl} alt={imgAlt} />
//       <h3>{name}</h3>
//       <p>Phone: {phone}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

class ContactCard extends Component {
  render() {
    const { name, imgUrl, imgAlt, phone, email } = this.props.contact;
    return (
      <div className={"contact-card"}>
        <img src={imgUrl} alt={imgAlt} />
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default ContactCard;
