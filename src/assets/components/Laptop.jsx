export function Laptop({ laptop }) {
  return (
    <div className="laptop-list-container">
      <div className="laptop-container">
        {/* Laptop 1 */}
        <img className="laptop-brand" src={laptop.brand} alt={laptop.model} />
        <div className="laptop-content-container">
          <div className="laptop-specs">
            <h2 className="laptop-model">{laptop.model}</h2>
            <p className="laptop-condition">{laptop.condition}</p>
          </div>
          <h4>Type: {laptop.type}</h4>
          <h4>Processor: {laptop.processor}</h4>
          <h4>Serial Number: {laptop.sNo}</h4>
          <h4>Purchase Date: {laptop.purchase_date}</h4>
          <h4>Current Value: R{laptop.current_value}</h4>
        </div>
      </div>
    </div>
  );
}
