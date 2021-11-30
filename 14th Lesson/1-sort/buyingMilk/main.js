const milk = [
  { name: "Rokiskio pienas", size: 0.9, price: 0.89, sale: true, discount: 15 },
  { name: "Saules pienas", size: 1, price: 0.69, sale: true, discount: 30 },
  { name: "Auga Eko", size: 1.5, price: 2.09, sale: true, discount: 20 },
  { name: "Mu", size: 0.9, price: 0.59, sale: false },
];

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.clear();

  const selected = event.target.elements.milkChoices.value;

  if (selected === "az") {
    console.log(milk.sort((a, b) => a.name > b.name));
  } else if (selected === "za") {
    console.log(milk.sort((a, b) => b.name > a.name));
  } else if (selected === "ascPrice") {
    console.log(milk.sort((a, b) => a.price - b.price));
  } else if (selected === "descPrice") {
    console.log(milk.sort((a, b) => b.price - a.price));
  } else if (selected === "maxDiscount") {
    console.log(
      milk.filter((milk) => milk.sale).sort((a, b) => b.discount - a.discount)
    );
  } else if (selected === "minDiscount") {
    console.log(
      milk.filter((milk) => milk.sale).sort((a, b) => a.discount - b.discount)
    );
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Prasome pasirinkti rikiavimo buda";
    document.body.append(errorMessage);
  }
});
