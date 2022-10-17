import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("Button click!", event, id);
        }}
      />
    </div>
  );
}

export default App;
