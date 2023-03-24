import { clientServices } from "../service/client-service.js"

console.log(clientServices);


const crearNuevaLinea = ( nombre, precio ) => {
    const linea = document.createElement("div");
    const contenido = 
    `<div class="producto">
        <img class="foto-producto" src="images/Productos/dadosojos.jpg">
        <p class="nombre-producto1">${nombre}</p>
        <p class="precio-producto">${precio}</p>
        <a class="ver-producto" href="#">Ver producto</a>    
    </div>`;
    linea.innerHTML = contenido;
    return linea; 
};

const table = document.querySelector("#grilla-productos");

clientServices.listaClientes().then((data) => {
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.precio);
        table.appendChild(nuevaLinea);
    });
});

//}).catch((error) => alert("Ocurrió un error"));

