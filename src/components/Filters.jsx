function Filters() {
  return (
    <div>
      <label htmlFor="country">By Country</label>
      <input id="country" type="text" placeholder="Spain..." />
      <label htmlFor="continent">By Continent</label>
      <select id="continent" name="continent">
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="northamerica">North America</option>
        <option value="southamerica">South America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;
