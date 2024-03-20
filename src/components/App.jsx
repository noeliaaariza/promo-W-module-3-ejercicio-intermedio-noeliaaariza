// Fichero src/components/App.jsx
import "../scss/App.scss";
import data from "../services/data.json";
import Header from "./Header";
import Filters from "./Filters";
import AddCountry from "./AddCountry";
import ListCountries from "./ListCountries";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleChangeSearch = (value) => {
    setSearchValue(value);
  };

  const handleChangeSelect = (value) => {
    setSelectValue(value);
  };

  const filteredCountries = data.filter((data) => {
    return (
      data.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
      data.continents[0].toLowerCase().includes(selectValue.toLowerCase())
    );
  });

  // const filteredContinents = data.filter((data) => {
  //   return data.continents[0].toLowerCase().includes(selectValue.toLowerCase());
  // });

  return (
    <>
      <Header />
      <Filters
        onChangeInput={handleChangeSearch}
        onChangeSelect={handleChangeSelect}
      />
      <AddCountry />
      <ListCountries countryData={filteredCountries} />
    </>
  );
}

export default App;
