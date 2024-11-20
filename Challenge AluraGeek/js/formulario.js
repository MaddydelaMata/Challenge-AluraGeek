// Seleccionamos el formulario
const formulario = document.querySelector('.formulario__contenido');

// Cuando el formulario sea enviado
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenimos que el formulario se recargue

    // Obtenemos los datos del formulario
    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const imagen = document.querySelector('#imagen').files[0]; // Si es necesario manejar imagenes

    // Creamos un objeto de producto
    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        imagen: URL.createObjectURL(imagen)  // Crea una URL temporal para la imagen
    };

    // Llamamos a la función para agregar el producto
    agregarProducto(nuevoProducto);

    // Limpiamos el formulario
    formulario.reset();
});
