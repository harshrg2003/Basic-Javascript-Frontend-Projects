const inputBx=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBx.value===""){
        alert("U must enter something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBx.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBx.value="";
    savedata();
}

listContainer.addEventListener("click",function(a){
    if(a.target.tagName=="LI"){
        a.target.classList.toggle("checked");
        savedata();
    }else if(a.target.tagName=="SPAN"){
        a.target.parentElement.remove();
        savedata();
    }
    
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showdata();