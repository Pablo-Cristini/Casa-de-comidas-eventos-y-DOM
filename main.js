let carrito = [];

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `<div class="card d-flex col-4">
        <div class="precio">${producto.precio}</div>
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        <button><a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a></button>
    </div>`;
})
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', (event) => {
        const nodo = event.target;
        const idProducto = nodo.getAttribute("data-id");
        const indiceProducto = productos.findIndex(producto => producto.id == idProducto);
        const producto = productos[indiceProducto];
        carrito.push(producto);
        console.log(carrito);
        
    })
});