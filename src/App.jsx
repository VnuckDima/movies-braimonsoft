import { useState } from "react";
import Header from "./widgets/Header";
import Movies from "./widgets/Movies";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header setSearch={setSearch}/>
      <Movies search={search} />
    </>
  );
}

export default App;
