const value = prompt("Please enter a name!");
const button = document.querySelector("button");

if (value == "") {
  alert("Please enter a valid name");
  button.innerText = "You didn't enter a valid name";
} else
  fetch(`https://api.genderize.io?name=${value}`)
    .then((res) => res.json())
    .then((data) => {
      const output = document.querySelector("p");
      output.innerText = `Based on the name you provide, you're a: ${data.gender}`;
    })
    .catch((err) => console.error(err));
button.addEventListener("click", () => {
  window.location.reload();
});
