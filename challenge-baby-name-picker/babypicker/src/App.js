import { useState } from "react";
import "./App.css";
import BabyNamesData from "./babyNamesData.json";
import Search from "./Search";
import ShowNames from "./ShowNames";

function App() {
  const [babyNames, setBabyNames] = useState(BabyNamesData);

  return (
    <>
      <Search names={babyNames} setBabyNames={setBabyNames} />
      <ShowNames names={babyNames} />
    </>
  );
}

export default App;

// const [searchText, setSearchText] = useState("");
//     {
//       /* <ShowNames names={babyNames} filter={searchText} /> */
//     }
