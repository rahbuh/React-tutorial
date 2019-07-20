import React, { Component } from "react";

// const ContactCard = ({ contact: { imgUrl, imgAlt, name, phone, email } }) => {
//   return (
//     <div className="contact-card">
//       <img src={imgUrl} alt={imgAlt} />
//       <h3>{name}</h3>
//       <p>Phone: {phone}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// };
class ContactCard extends Component {
  componentDidMount() {
    console.log('Success')
  }

  render() {
    const { imgUrl, imgAlt, name, phone, email } = this.props.contact;

    return (
      <div className="contact-card">
        <img src={imgUrl} alt={imgAlt} />
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default ContactCard;
