import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import contactData from "./contactData";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.setState({ contacts: contactData });
  }

  render() {
    const contacts = this.state.contacts;
    const contactInfo = contacts.map(contact => (
      <ContactCard key={contact.id} contact={contact} />
    ));

    return <div className={"contacts"}>{contactInfo}</div>;
  }
}

export default App;
