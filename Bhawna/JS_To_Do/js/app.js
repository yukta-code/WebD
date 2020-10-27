const clear = document.querySelector(".clear");
const download = document.querySelector(".download")
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const options = {weekday: "long" , month:"short" , day :"numeric"}
let todoarray=[];
const today = new Date();

const CHECK ="fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

dateElement.innerHTML = today.toLocaleDateString("en-IN",options);

function addToDo(todo)
{
    const item = `<li class="item">
    <i class="fa fa-circle-thin co" job="complete"></i>
    <p class="text">${todo}</p>
    <i class="fa fa-pencil up"  job="update"></i>
    <i class="fa fa-trash-o de" job="delete"></i>
    </li>`;

    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
    todoarray.push(todo);

}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

}
function updateToDo(element){
   
            const e=input.value;
            element.parentNode.querySelector(".text").innerHTML=e;   
}

document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const todo = input.value;
        
        if(todo){
            addToDo(todo);
        }
    }
});

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
}


list.addEventListener("click",function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob=="complete"){
        completeToDo(element);
    }
    else if(elementJob=="delete"){
        removeToDo(element);
    }
    else if(elementJob=="update")
    {
        updateToDo(element);
    }
});

clear.addEventListener("click",function(event){
  list.innerHTML="";  
});

download.addEventListener("click",function(event){
    localStorage.setItem('todolist', JSON.stringify(todoarray));
    //const s =localStorage.getItem('todolist');
    //document.write(s);
});
