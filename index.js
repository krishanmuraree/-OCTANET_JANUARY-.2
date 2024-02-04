
const inputbox = document.getElementById("input-box");
const listcontener = document.getElementById("list-contaner");

function addtask(){

    if(inputbox.value === ''){

        alert("add your task");
    }
    else{

        let Li = document.createElement("li");

        Li.innerHTML = inputbox.value;
        listcontener.append(Li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        Li.append(span);
    }
 
    inputbox.value = "";
    
    savedata();
}
listcontener.addEventListener("click" ,function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

},false);

function savedata(){

    localStorage.setItem("data",listcontener.innerHTML);
}

function showdata(){

    listcontener.innerHTML = localStorage.getItem("data");
}
showdata();

