import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  return (
    <div>
      <Navbar setCountry={setCountry} setCategory={setCategory} />
      <NewsBoard country={country} category={category} />
    </div>
  );
}

export default App;
