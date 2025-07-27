export function CalculatePrice(laptop, quoteType) {

    const conditionPrice = laptop.condition == "New" ? 100 : laptop.condition == "Used" ? 50 : 30;
    const brandPrice = laptop.brandName == "Apple" ? 95 : laptop.brandName == "Lenovo" ? 85 : laptop.brandName == "Dell" ? 60 : 45;

    const processorPrice = ['Intel Core i3', 'AMD Ryzen 3', 'Apple M2'].includes(laptop.processor) ? 30 :
        ['Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'Apple M3'].includes(laptop.processor) ? 50 : 80;

    const now = new Date();
    const purchase = new Date(laptop.purchase_date);
    const numYears = now.getFullYear() - purchase.getFullYear();
    const yearPrice = numYears > 0 && numYears < 10 ? 50 : 20;
    const optionPrice = quoteType == "Basic" ? 100 : quoteType == "Premium" ? 1200 : 500;
    const totalPrice = Math.round(((laptop.current_value * 0.5) + conditionPrice + brandPrice + processorPrice + yearPrice + optionPrice) / 12, 2);

    return {
        conditionPrice, brandPrice, processorPrice, yearPrice, optionPrice, totalPrice
    };

}
