
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let mainTitle = document.getElementById("main_title");
let button = document.getElementById("submit_button");
let form = document.querySelector("form");
let div = document.querySelector("div");

titleInput.addEventListener("input", (event) => {
    mainTitle.textContent = event.target.value;
});

button.addEventListener("click", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;

    if (title && noun && verb && adjective) {
        form.style.display = "none";
        let newParagraph = document.createElement("p");
        newParagraph.innerHTML = "Last night I ate a " + noun + " and today I just had to " + verb + ". It was a " + adjective + " day!";
        div.appendChild(newParagraph);

    } else {
        alert("Please fill in all fields");
    }
});
