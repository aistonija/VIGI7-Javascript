let items = [
  {
    id: "prod1",
    image:
      "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
    name: "Leather Tool Roll Up Pouch",
    price: 30.9,
  },
  {
    id: "prod2",
    image:
      "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
    name: "Hand Forged Viking Axe",
    price: 132.48,
  },
  {
    id: "prod3",
    image:
      "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
    name: "Leather Cabinet Pulls",
    price: 5.68,
  },
  {
    id: "prod4",
    image:
      "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
    name: "Unicorn Papercraft, 3D Papercraft",
    price: 14.52,
  },
  {
    id: "prod5",
    image:
      "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
    name: "Chicken Coop Plans",
    price: 18.11,
  },
];

const boday = document.querySelector("body");
const productsContainer = document.createElement("section");

Object.assign(productsContainer.style, {
  width: "90%",
  margin: "20px auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
});

for (let x = 0; x < items.length; x++) {
  const product = items[x];
  // console.log(product);

  const article = document.createElement("article");
  Object.assign(article.style, {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "30px",
    textAlign: "center",
  });

  const photo = document.createElement("img");
  Object.assign(photo.style, {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "1rem",
  });
  photo.src = product.image;

  const productName = document.createElement("h2");
  productName.style.marginBottom = "1rem";
  productName.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  article.append(photo, productName, price);
  productsContainer.append(article);
  boday.append(productsContainer);
}
