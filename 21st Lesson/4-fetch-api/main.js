// https://javascript.info/fetch

// https://javascript.info/fetch-api

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// https://picsum.photos/

const rand = Math.floor(Math.random() * 6) + 1;

fetch(`https://picsum.photos/v2/list?page=${rand}`)
  .then((response) => response.json())
  .then(
    (data) =>
      data.forEach((picture) => {
        getDataNormal(picture);
        // console.log(picture.download_url);
      })
    // console.log(data)
  );

function getDataNormal(picture) {
  const img = document.createElement("img");
  img.src = picture.download_url;
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.objectFit = "cover";
  img.style.margin = "10px";

  document.body.append(img);
}

// async function getData() {
//   const response = await fetch(`https://picsum.photos/v2/list?page=${rand}`);
//   const photos = await response.json();
//   console.log(photos);
//   return photos;
// }

// getData().then((data) => {
//   data.forEach((pic) => {
//     const img = document.createElement("img");
//     img.src = pic.download_url;
//     img.style.width = "200px";
//     img.style.height = "200px";
//     img.style.objectFit = "cover";
//     img.style.margin = "10px";
//     document.body.append(img);
//   });
// });
