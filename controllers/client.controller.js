import { clientServices } from "../service/client-service.js"

console.log(clientServices);


const crearNuevaLinea = ( nombre, precio, id ) => {
    console.log(id);
    const linea = document.createElement("div");
    // linea.classList.add('productos-json');
    productos.appendChild(producto-json);
    const contenido = 
    `<div class="producto-json">
        <img class="foto-producto" src="">
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
        console.log(perfil);
        const nuevaLinea = crearNuevaLinea(perfil.categoria, perfil.nombre, perfil.precio, perfil.descripcion);
        table.appendChild(nuevaLinea);
    });
});

const crearNuevaLinea2 = ( categoria, nombre, precio, descripcion, id ) => {
    console.log(id);
    const linea = document.createElement("div");
    linea.classList.add('productos');
    const contenido = 
    `<div class="producto">
        <img class="foto-producto" src="">
        <p class="nombre-producto1">${nombre}</p>
        <p class="precio-producto">${precio}</p>
        <p class="precio-producto">${id}</p>
        <a class="ver-producto" href="../editar-producto.html?id=${id}">Editar</a>
        <button class="boton-eliminar" type="button" id="${id}">
            Eliminar
        </button>  
    </div>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        console.log("el click", id);
        clientServices.eliminarCliente(id).then( respuesta => {
            console.log(respuesta)
        })
        
    });

    return linea; 
};

const table2 = document.querySelector("#grilla-productos2");

clientServices.listaClientes().then((data) => {
    data.forEach(perfil => {
        console.log(perfil);
        const nuevaLinea = crearNuevaLinea2(perfil.categoria, perfil.nombre, perfil.precio, perfil.descripcion, perfil.id);
        table2.appendChild(nuevaLinea);
    });
});

// }).catch((error) => alert("Ocurrió un error"));
