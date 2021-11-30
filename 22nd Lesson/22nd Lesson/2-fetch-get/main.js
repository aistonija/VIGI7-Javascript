// base URL: https://picsum.photos/v2/list?page=2

const rand = Math.floor(Math.random() * 5) + 1;

fetch(`https://picsum.photos/v2/list?page=${rand}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach(printPicture);
  });

function printPicture(picture) {
  const img = document.createElement("img");
  img.src = picture.download_url;
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.objectFit = "cover";
  document.querySelector(".container").append(img);
}
