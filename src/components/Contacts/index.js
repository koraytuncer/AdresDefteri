import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Koray",
      phoneNumber: "054525454"
    },
    {
      fullname: "Burcu",
      phoneNumber: "054525454"
    },
    {
      fullname: "Asaf",
      phoneNumber: "054525454"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Adres Defteri</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}
