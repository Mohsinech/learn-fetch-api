fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // see the fact in the console.
    const output = document.querySelector("p");
    output.textContent = data.fact;
  })
  .catch((err) => console.error(err));

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
