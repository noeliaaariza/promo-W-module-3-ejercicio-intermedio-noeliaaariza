import Country from "./Country";

function ListCountries({ countryData }) {
  return (
    <div>
      {countryData.map((countryInfo, index) => {
        return <Country countryInfo={countryInfo} key={index} />;
      })}
    </div>
  );
}

export default ListCountries;
