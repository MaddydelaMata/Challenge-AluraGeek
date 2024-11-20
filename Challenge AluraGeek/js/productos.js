// Función para agregar un producto
function agregarProducto(producto) {
    fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Producto agregado:', data);
        cargarProductos(); // Recargamos los productos
    })
    .catch(error => console.error('Error al agregar el producto:', error));
}

// Función para eliminar un producto
function eliminarProducto(id) {
    fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        console.log('Producto eliminado');
        cargarProductos(); // Recargamos los productos
    })
    .catch(error => console.error('Error al eliminar el producto:', error));
}

