const listaClientes = () =>
    fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearProducto = (categoria, nombreproducto, precioproducto, descripcion) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoria, nombreproducto, precioproducto, descripcion, id: uuid.v4() }),
    });
};

export const clientServices = {
    listaClientes,
    crearProducto,
};


