// Al cargar la página, obtenemos los productos desde el servidor
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();  // Función que se encargará de cargar los productos desde JSON Server
});

// Función que obtiene los productos desde la API (JSON Server)
function cargarProductos() {
    fetch('http://localhost:3000/productos')  // URL de tu JSON Server
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función que muestra los productos en el HTML
function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector('[data-contenedor-productos]');
    
    // Limpiamos el contenedor antes de agregar nuevos productos
    contenedorProductos.innerHTML = '';
    
    productos.forEach(producto => {
        const productoCard = crearProductoCard(producto);
        contenedorProductos.appendChild(productoCard);

        // Asociamos el evento de eliminar a cada ícono de basura (delete)
        const deleteIcon = productoCard.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', () => eliminarProducto(producto.id));  // Usamos el ID del producto
    });
}


// Función que crea una tarjeta de producto
function crearProductoCard(producto) {
    const div = document.createElement('div');
    div.classList.add('card');
    
    div.innerHTML = `
        <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" />
        <div class="card-container--info">
            <p>${producto.nombre}</p>
            <div class="card-container--value">
                <p>$${producto.precio}</p>
                <span class="material-symbols-outlined delete-icon">delete</span>
            </div>
        </div>
    `;
    
    return div;
}
