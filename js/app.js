const formulario = document.querySelector("#form-tarea");
const inputTarea = document.querySelector("#input-tarea");
const listaTareas = document.querySelector("#lista-tareas");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.classList.remove("oculto");
    return;
  } else {
    mensajeError.classList.add("oculto");
  }

  const item = document.createElement("li");
  const itemTexto = document.createElement("p");
  itemTexto.textContent = texto;
  item.appendChild(itemTexto);
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    itemTexto.classList.toggle("completada");
  });

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";
  botonEliminar.classList.add("boton-eliminar");
    botonEliminar.addEventListener("click", (event) => {
        event.stopPropagation();
        listaTareas.removeChild(item);
    });

    item.appendChild(botonEliminar);
    listaTareas.appendChild(item);
    inputTarea.value = "";
});