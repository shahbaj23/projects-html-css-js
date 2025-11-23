
function handleSubmit(){
    let inputValue = document.getElementById("inp").value
    let listContainer = document.getElementById("list-cont")
    if(inputValue === ""){
        alert("Please! Enter your task...")
        return
    }

    let task = document.createElement('p')
    task.className ="list"
    task.textContent = inputValue;

    listContainer.appendChild(task)

    // Delete
    task.onclick =()=>task.remove()

    document.getElementById("inp").value = ""
}