import React, { Component } from "react";
import ContactCard from "./components/ContactCards";
import contactData from "./contactData";

class App extends Component {
  render() {
    const contactComponents = contactData.map(contact => {
      return <ContactCard key={contact.id} contact={contact} />;
    });

    return <div className="contacts">{contactComponents}</div>;
  }
}

export default App;
