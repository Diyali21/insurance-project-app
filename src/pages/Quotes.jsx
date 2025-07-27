import {useParams, useNavigate } from "react-router";
import { CalculatePrice } from "./CalculatePrice";

export function Quotes({laptop_details, selectedQuote}){

  const {id} = useParams();
  const laptop = laptop_details[id];
  const navigate = useNavigate();

  const basicPrice = CalculatePrice(laptop, "Basic").totalPrice;
  const stdPrice = CalculatePrice(laptop, "Standard").totalPrice;
  const premPrice = CalculatePrice(laptop, "Premium").totalPrice;

  const generateQuote = (quoteType) => {
    const priceBreakdown = CalculatePrice(laptop, quoteType);
    const quoteDetails = {
        quoteType,...priceBreakdown
    }
    selectedQuote(quoteDetails);
    navigate("/confirm");
  }
return(
    <div>
      <div className="quotes-card-container">
      <div className="basic-card">
        <div className="quotes-content">
          <h2 className="tier-emoji">🧩</h2>
        <h1>Basic</h1>
        <h2>R{basicPrice} pm</h2>
        </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">❌ Liquid Damage</p>
      <p className="quotes-coverage">❌ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Basic", basicPrice)}>Get Cover</button>
      </div>
       <div className="std-card">
        <div className="quotes-content">
          <h2>⚙️</h2>
      <h1>Standard</h1>
      <h2>R{stdPrice} pm</h2>
      </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">❌ Accidental Damage</p>
      <p className="quotes-coverage">❌ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Standard", stdPrice)}>Get Cover</button>
      </div>
      <div className="premium-card">
        <div className="quotes-content">
          <h2>💎</h2>
      <h1>Premium</h1>
      <h2>R{premPrice} pm</h2>
      </div>
      <p className="quotes-coverage">✅ Theft Protection</p>
      <p className="quotes-coverage">✅ Liquid Damage</p>
      <p className="quotes-coverage">✅ Power Surge Damage</p>
      <p className="quotes-coverage">✅ Accidental Damage</p>
      <p className="quotes-coverage">✅ Hardware Malfunction</p>
      <button className="get-cover-btn" onClick={() => generateQuote("Premium", premPrice)}>Get Cover</button>
      </div>
      </div>
    </div>
  )
}
