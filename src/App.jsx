import React from "react";
import PizzaList from "./components/PizzaList";
import Footer from "../src/components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Header />
      <div className="App">
        <main className="App-header">
          <PizzaList />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
