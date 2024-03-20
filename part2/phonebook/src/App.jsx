import { useState } from "react";

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  const addName = (e) => {
    e.preventDefault();

    const double = persons.filter((item) => item.name === newName);
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (double.length !== 0) {
      setNewName("");
      return alert(`${newName} is already added to phonebook`);
    }

    setPersons([...persons, personObject]);
    setNewName("");
    setNewNumber("");
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilterText(e.target.value);
  };

  const filteredPhonebook = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleChangeFilter} type="text" />
      </div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumber} type="tel" />
        </div>
        <div>
          <button onClick={addName} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterText
        ? filteredPhonebook.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))
        : persons.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              number={person.number}
            />
          ))}
    </div>
  );
};

export default App;
