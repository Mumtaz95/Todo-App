function todoApp() {
    var li = document.createElement("li", "<button>Delete</button>");
    var inputValue = document.getElementById("todoText").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == "") {
        alert("You must add todo in text Box!")
    } else {
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoText").value = "";
    }
}

function deleteAll() {
    document.getElementById("todoList").innerHTML = "";
}