/*$("#btnPost").on("click",function(e){
    e.preventDefault()

    var checkbox = $("<input>")
    var label = $("<label>")

    checkbox.attr("type","checkbox")
    checkbox.attr("name","todo")
    label.textContent = $("#todoText").value
    label.attr("class","lbl")

    $("#todoList").append("<div>" + checkbox + label)

    $("todoText").value = ""
})*/

$("#btnPost").on("click",ToDoPost)
$("btnClear").on("click",ToDoClear)
$("btnMark").on("click",ToDoMark)
$("btnDelete").on("click",ToDoDel)

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