const message = document.querySelector("#message");

const addMovie = (event) => {
    event.preventDefault();
let inputField = document.querySelector("input");
let movie = document.createElement("li");
let movieTitle = document.createElement("span");

movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie);
movie.appendChild(movieTitle);
document.querySelector("ul").appendChild(movie);

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

inputField.value = " ";
}

const deleteMovie = (event) => {
event.target.parentNode.remove();
let movie = event.target.parentNode.firstChild.textContent;
console.log(movie);
message.textContent = `${movie} deleted`
revealMessage();
}

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  let checked = event.target.classList.contains("checked");
  let movie = event.target.textContent;
    if(checked) {
        message.textContent = `${movie} watched!`;
    } else {
        message.textContent = `${movie} added back to your list`;
    }
revealMessage();
}

const revealMessage = () =>{
    message.classList.remove("hide");
    setTimeout(() => message.classList.add("hide"), 2000);
}

document.querySelector("form").addEventListener("submit", addMovie)
