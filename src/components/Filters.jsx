function Filters({ onChangeInput, onChangeSelect }) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    onChangeInput(inputValue);
  };

  const handleSelect = (ev) => {
    const inputSelectValue = ev.target.value;
    onChangeSelect(inputSelectValue);
  };

  return (
    <div>
      <label htmlFor="country">By Country</label>
      <input
        id="country"
        type="text"
        placeholder="Spain..."
        onChange={handleInput}
      />

      <label htmlFor="continent">By Continent</label>
      <select id="continent" name="continent" onChange={handleSelect}>
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
