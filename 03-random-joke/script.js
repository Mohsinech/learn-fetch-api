fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((data) => {
    const output = document.querySelector("p");
    output.textContent = data.setup + " " + data.punchline;
  })
  .catch((err) => console.error(err));

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
