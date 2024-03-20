// Fichero src/components/App.jsx
import "../scss/App.scss";
import data from "../services/data.json";
import Header from "./Header";
import Filters from "./Filters";
import AddCountry from "./AddCountry";
import ListCountries from "./ListCountries";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <AddCountry />
      <ListCountries countryData={data} />
    </>
  );
}

export default App;
