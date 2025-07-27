import { INITIAL_LAPTOPS  } from "../components/INITIAL_LAPTOPS";

export function SearchModel({ model, setModel, brandName, setBrandName }) {

  return (
    <div>
      <div className="search-model-container">
      <input className="search-model" type="text" value={model} onChange={(event) => setModel(event.target.value)} placeholder="Laptop Model"></input>
      </div>

        <label htmlFor="brandSelect">Choose a Brand: </label>
      <select className="filter-brand"
        value={brandName}
        onChange={(event) => setBrandName(event.target.value)}
      >
        <option value="">Select brand</option>

        {INITIAL_LAPTOPS.map((laptops) => (
          <option value={laptops.brandName}>{laptops.brandName}</option>
        ))};
      </select>
    </div>
  );
}
