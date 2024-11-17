const name = prompt("What is you name?");

fetch(`https://api.agify.io?name=${name}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const output = document.querySelector("p");
    output.innerText = `Based on you name : "${name}", your age will be: ${data.age} yo.`;
  })
  .catch((err) => console.error(err));
