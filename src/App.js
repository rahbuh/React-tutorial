import React, { Component } from "react";
import ContactCards from "./components/ContactCards";
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
      <ContactCards key={contact.id} contact={contact} />
    ));

    return <div className={"contacts"}>{contactInfo}</div>;
  }
}

export default App;
