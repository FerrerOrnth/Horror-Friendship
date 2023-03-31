import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[editform]")

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    if(id === null){
        console.log("hacer");
    }
    // const imagen = document.querySelector("[editar-imagen]")
    const categoria = document.querySelector("[editar-categoria]")
    const nombre = document.querySelector("[editar-nombre]")
    const precio = document.querySelector("[editar-precio]")
    const descripcion = document.querySelector("[editar-descripcion]")


clientServices.detalleCliente(id).then((perfil) => {
    // imagen.value = perfil.imagen;
    categoria.value = perfil.categoria;
    nombre.value = perfil.nombre;
    precio.value = perfil.precio;
    descripcion.value = perfil.descripcion;
});
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 
    
    // const imagen = document.querySelector("[editar-imagen]").value
    const categoria = document.querySelector("[editar-categoria]").value;
    const nombre = document.querySelector("[editar-nombre]").value;
    const precio = document.querySelector("[editar-precio]").value;
    const descripcion = document.querySelector("[editar-descripcion]").value;
    console.log(categoria, nombre, precio, descripcion);
    clientServices.actualizarCliente(categoria, nombre, precio, descripcion, id).then(() => {
        window.location.href = "../productos-administrador.html";
    });
});
