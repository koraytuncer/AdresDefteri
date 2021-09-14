import { useState } from "react";

export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filtrele"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, key) => (
          <li key={key}>
            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Kayıt Sayısı : {filtered.length}</p>
    </div>
  );
}
