const formInput = document.getElementById("submit1")
const taskForm = document.getElementById("form1")

taskForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("Form submitted, text should appear on page")
    let newtext = document.createElement("p");
    newtext.textContent = formInput.value;
    document.body.appendChild(newtext);
})