import "./App.css";
import Hangman from "./components/Hangman";

function App() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        HangMan
      </h1>
      <Hangman />
    </div>
  );
}

export default App;
