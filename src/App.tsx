import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="success" />
      {/* Parsing react props into child component */}
      <Oscar>
        <Heading>Oscar Dilahoya</Heading>
      </Oscar>

      {/* Make optional props */}
      <Greet name="Alexandr" isLoggedIn={true} />
    </div>
  );
}

export default App;
