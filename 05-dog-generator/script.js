fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    const img = document.querySelector("img");
    img.src = data.message;
  })
  .catch((err) => console.error(err));

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
