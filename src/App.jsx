import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";


//! Merk dere at det er laget egne css filer til hver enkelt komponent. Dette gjør det enkelt å style enkeltkomponenter.

function App() {
  // Her lager jeg to useStates for å styre count og navn:

  // const [count, setCount] = useState(0) // 0 er den initielle verdi.
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Joakim") // Joakim er den initielle verdi.
  const [name, setName] = useState("Joakim");

  // lager en funksjon som øker count med 1. konsoll logger i tillegg for å se verdien til count (ikke nødvendig)
  function increment() {
    // setCount må brukes for å oppdatere verdien til count
    setCount(count + 1);
    console.log(count);
  }

  // lager en funksjon som reduserer count med 1. konsoll logger i tillegg for å se verdien til count (ikke nødvendig)
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  // lager en funksjon som skifter mellom verdien til name med Joakim og Bob.
  function changeGreeting() {
    if (name === "Bob") {
      // setName må brukes for å oppdatere verdien til name
      setName("Joakim");
    } else {
      setName("Bob");
    }
  }
  return (
    <>
    {/* header komponent som inneholder navbar */}
      <Header />
      {/* Main komponent som har count, name, increment, decrement, changeGreeting funksjoner. Dette henter funksjoner fra app.jsx og gjør det tilgjengelig inne i main funksjonen. Det finnes bedre måter å gjøre dette på, men dette fungerer helt greit intil videre */}
      <Main increment={increment} decrement={decrement} count={count} name={name} changeGreeting={changeGreeting} />
      {/* footer komponent */}
      <Footer />
    </>
  );
}

export default App;
