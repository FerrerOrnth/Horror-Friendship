import { clientServices } from "../service/client-service.js"; 

const formulario = document.querySelector("[dataform")

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    const categoria = document.querySelector("[categoria]").value;
    const nombreproducto = document.querySelector("[nombreproducto]").value;
    const precioproducto = document.querySelector("[precio]").value;
    const descripcion = document.querySelector("[descripcion]").value;

   console.log(categoria, "-", nombreproducto, "-", precioproducto, "-", descripcion);
    clientServices.crearProducto(categoria, nombreproducto, precioproducto, descripcion).then( respuesta => {
        console.log(respuesta)
    }).catch((err) => console.log(err));
});