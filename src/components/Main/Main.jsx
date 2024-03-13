import "./main.css";

import { PageLayout } from "../Layout/PageLayout";
import { NormalButton } from "../Buttons/Buttons";

// For å kunne bruke verdiene fra app.jsx må propsa skrives inn her også. Bruk {} rundt propsa.
export const Main = ({ increment, decrement, count, name, changeGreeting }) => {
  return (
    // PageLayout er en komponent som brukes rundt hovedseksjonen av sider. Ved å lage en slik komponent kan den gjenbrukes i andre sider slik at layout blir likt.
    <PageLayout>
      <section>
        {/* Knappe komponenter laget her så de alle får en standard styling. Veldig simpel komponent som er litt overkill her, men kan brukes. */}
        <NormalButton onClick={increment}>increment</NormalButton>
        <NormalButton onClick={decrement}>decrement</NormalButton>
        <p>{count}</p>
      </section>
      <section>
        <NormalButton onClick={changeGreeting}>Change name</NormalButton>
        <p>{name}</p>
        {/* className logikken spørr om navnet er Bob. viser className green om det stemmer, ellers orange */}
        <p className={`${name === "Bob" ? "green" : "orange"}`}>
        {/* logikken under spørr om navnet er Bob. hvis det er det vises Marley, ellers Villo */}
          {name === "Bob" ? "Marley" : "Villo"}
        </p>
      </section>
      <section>section3</section>
    </PageLayout>
  );
};
