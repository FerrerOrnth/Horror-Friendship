import { clientServices } from "../service/client-service.js"; 

const formulario = document.querySelector("[dataform]")

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    // const imagen = document.querySelector("[imagen]").value;
    const categoria = document.querySelector("[categoria]").value;
    const nombre = document.querySelector("[nombre]").value;
    const precio = document.querySelector("[precio]").value;
    const descripcion = document.querySelector("[descripcion]").value;

    console.log(categoria, "-", nombre, "-", precio, "-", descripcion);
    clientServices.crearProducto(categoria, nombre, precio, descripcion).then( respuesta => {
        window.location.href = "/administrador.html"
    }).catch((err) => console.log(err));
});