let input = document.getElementById("inp");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if (input.value === '') {
        alert("Enter a value don't add empty task");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData();
})

list.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData=()=>{
    localStorage.setItem("To-Do-Data",list.innerHTML);
}
const getData=()=>{
    list.innerHTML=localStorage.getItem("To-Do-Data");
}
getData();