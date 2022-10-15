import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  // temporary data init
  const person = {
    first: "Hitman",
    last: "Jonathan",
  };

  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Hitman" messageCount={10} isLoggedIn={true} />
      <Person data={person} />
      <PersonList datas={personList} />
    </div>
  );
}

export default App;
