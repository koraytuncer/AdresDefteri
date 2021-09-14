import { useState } from "react";

const initialFormValue = { fullname: "", phoneNumber: "" };
export default function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValue);

  const OnChanceInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form]);

    setForm(initialFormValue);
  };
  return (
    <form onSubmit={OnSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="FullName"
          value={form.fullname}
          onChange={OnChanceInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={OnChanceInput}
        />
      </div>
      <button className="btn btn-danger mt-1" onClick={OnSubmit}>
        Add
      </button>
    </form>
  );
}
