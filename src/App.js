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
      <ContactCard key={contact.id} contact={contact} />
    ));

    return <div className={"contacts"}>{contactCards}</div>;
  }
}

export default App;