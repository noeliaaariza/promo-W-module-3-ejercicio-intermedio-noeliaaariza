import "../scss/components/Country.scss";
function Country({ countryInfo }) {
  return (
    <div className="country">
      <p>{countryInfo.flag}</p>
      <h2>{countryInfo.name.common}</h2>
      <h3>{countryInfo.capital}</h3>
      <p>{countryInfo.continents}</p>
    </div>
  );
}

export default Country;
