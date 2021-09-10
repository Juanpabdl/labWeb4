var post = document.getElementById("btnPost");
var clear = document.getElementById("btnClear");
var mark = document.getElementById("btnMark");
var del = document.getElementById("btnDelete");

post.addEventListener("click",ToDoPost);
clear.addEventListener("click",ToDoClear);
mark.addEventListener("click",ToDoMark);
del.addEventListener("click",ToDoDel);

function ToDoPost(e){
e.preventDefault()

var todo = document.getElementById("todoText").value
var list = document.getElementById("todoList")

var div = document.createElement("div")
var checkbox = document.createElement("input")
var label = document.createElement("label")

checkbox.type = "checkbox"
checkbox.name = "todo"
label.textContent = todo
label.setAttribute("class","lbl")

div.appendChild(checkbox)
div.appendChild(label)
list.appendChild(div)
    
document.getElementById("todoText").value = ""
}

function ToDoClear(){
    var todos = document.getElementsByName("todo")
    for(var i=0; i<todos.length; i++){
        todos[i].checked = false;
    }
}

function ToDoMark(){
    var todos = document.getElementsByName("todo")
    for(var i=0; i<todos.length; i++){
        todos[i].checked = true;
    }
}

function ToDoDel(){
    /*var todos = document.getElementsByName("todo")
    for(var i=0; i<todos.length; i++){
        if(todos[i].checked == true)
            todos[i].parentElement.remove();
    }*/

    var list = document.getElementById("todoList")
    list.innerHTML=""
}