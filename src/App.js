import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import contactData from "./contactData";

class App extends Component {
  // state = {
  //   contacts: contactData
  // };

  // componentDidMount() {
  //   this.setState({ contacts: contactData });
  // }

  render() {
    // const contacts = this.state.contacts;
    const contactCards = contactData.map(contact => (
    //     <div key={contact.id} className={"contact-card"}>
    //       <img src={contact.imgUrl} alt={contact.imgAlt} />
    //       <h3>{contact.name}</h3>
    //       <p>Phone: {contact.phone}</p>
    //       <p>Email: {contact.email}</p>
    //     </div>
      <ContactCard key={contact.id} contact={contact} />
    ));

    return <div className={"contacts"}>{contactCards}</div>;
  }
}

export default App;