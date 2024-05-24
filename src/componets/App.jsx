import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getDataFromApi from "../services/api";
import "../styles/App.scss";
import Header from "./Header";
import FilterName from "./FilterName";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  //Var de estado
  const [characters, setCharacters] = useState([])
  const [name, setName] = useState("")


  useEffect(() => {
    getDataFromApi().then((newArray) => {
      setCharacters(newArray);
    });
  }, []);

  const filterData = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  //router
  const getInfo = (idNumber) => {
    return characters.find((item) => item.id === idNumber);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterName name={name} setName={setName} />
              <CharacterList characters={filterData} />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<CharacterDetail getInfo={getInfo} />}
        />
        <Route path="*" element={<h1 className="text">Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
