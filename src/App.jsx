import { useState } from "react";

import "./App.css";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
