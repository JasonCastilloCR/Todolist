const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Agregar tarea

/*

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

*/

function addTask() {
    if (inputBox.value === '') {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
  
      // Agregar la clase de animación al nuevo elemento de lista
      li.classList.add('fade-in');
  
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  
    // Eliminar la clase de animación después de un tiempo para futuras adiciones de tareas
    setTimeout(() => {
      li.classList.remove('fade-in');
    }, 500);
  }
  

  /*
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

*/

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      let li = e.target.parentElement;
  
      // Agregar la clase de animación al elemento de lista que se eliminará
      li.classList.add('fade-out');
  
      // Eliminar el elemento de lista después de la duración de la animación
      setTimeout(() => {
        li.remove();
        saveData();
      }, 500);
    }
  }, false);
  