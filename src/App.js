import React, {Component} from "react";
import ContactCard from "./components/ContactCards";
import contactData from "./contactData";

class App extends Component {
  render() {
    const contactComponents = contactData.map(contact => {
      return (
        <ContactCard 
        key={contact.id} 
        name={contact.name} 
        imgUrl={contact.imgUrl} 
        imgAlt={contact.imgAlt}
        phone={contact.phone}
        email={contact.email} />
      )
    });

    return (
      <div className="contacts">
        {contactComponents}
      </div>
    )
  }
}

// const App = () => {
//   const contactComponents = contactData.map(contact => {
//     return (
//       <ContactCard 
//       key={contact.id} 
//       name={contact.name} 
//       imgUrl={contact.imgUrl} 
//       imgAlt={contact.imgAlt}
//       phone={contact.phone}
//       email={contact.email} />
//     )
//   });

//   return (
//     <div className="contacts">
//       {/* <ContactCard
//         name="Mr. Whiskerson"
//         imgUrl="http://placekitten.com/300/200"
//         imgAlt="Picture of Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       /> INDIVIDUAL PROPS */}
//       {/* <ContactCard
//         contact={{
//           name: "Mr. Whiskerson",
//           imgUrl: "http://placekitten.com/300/200",
//           imgAlt: "Picture of Mr. Whiskerson",
//           phone: "(212) 555-1234",
//           email: "mr.whiskaz@catnap.meow"
//         }}
//       /> OBJECT PROPS */}
      
//       {contactComponents}
//     </div>
//   );
// };

export default App;
