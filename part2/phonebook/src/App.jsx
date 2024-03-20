import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();

    if (persons.filter(item => item.name === newName)) {
      setNewName('')
      return alert (`${newName} is already added to phonebook`)
    }

    const personObject = {
      name: newName,
    };

    setPersons([...persons, personObject]);
    setNewName("");
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
        </div>
        <div>
          <button onClick={addName} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  );
};

export default App;
