const inputbox = document.getElementById("inputbox");
const tasklist = document.getElementById("list");

function addTask(){
    if(inputbox.value == ''){
        alert("You must write your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = "";
    save();
}

tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data", list.innerHTML)
}

function showTasks(){
    tasklist.innerHTML = localStorage.getItem("data");
}

showTasks();