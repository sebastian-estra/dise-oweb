/*let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    // Obtén el elemento del carrito en tu interfaz de usuario (puedes personalizar esto según tu estructura HTML)
    const carritoElement = document.getElementById("carrito");

    // Limpia el contenido actual del carrito
    carritoElement.innerHTML = "";

    // Recorre cada producto en el carrito y muestra la información
    carrito.forEach(producto => {
        const productoElement = document.createElement("div");
        productoElement.innerHTML = `<p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>`;
        carritoElement.appendChild(productoElement);
    });

    // Aquí puedes implementar más lógica para mostrar el carrito en tu interfaz de usuario si es necesario.
    console.log(carrito);
}*/
/*let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");

    // Calcular el total de la compra
    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    carritoElement.innerHTML = `<p>Total de la compra: $${total.toFixed(2)}</p>`;

    console.log(carrito);
}*/
/*let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);
    actualizarCarrito();
}

function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function toggleCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.classList.toggle("oculto");
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");

    // Calcular el total de la compra
    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    // Crear la lista de productos en el carrito
    const listaProductos = carrito.map((producto, index) => `
        <li>${producto.nombre} - $${producto.precio.toFixed(2)}
            <button onclick="quitarDelCarrito(${index})">Quitar</button>
        </li>`);

    carritoElement.innerHTML = `
        <p>Total de la compra: $${total.toFixed(2)}</p>
        <ul>${listaProductos.join('')}</ul>
    `;

    console.log(carrito);
}*/
/*let carrito = [];

function agregarAlCarrito(nombre, precio) {
    // Busca si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        const producto = {
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };
        carrito.push(producto);
    }

    actualizarCarrito();
}

function quitarDelCarrito(index, cantidad) {
    const producto = carrito[index];

    if (cantidad >= producto.cantidad) {
        // Si la cantidad a quitar es mayor o igual a la cantidad en el carrito, elimina el producto
        carrito.splice(index, 1);
    } else {
        // Si la cantidad a quitar es menor, simplemente decrementa la cantidad
        producto.cantidad -= cantidad;
    }

    actualizarCarrito();
}

function toggleCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.classList.toggle("oculto");
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");

    // Calcular el total de la compra
    const total = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0);

    // Crear la lista de productos en el carrito
    const listaProductos = carrito.map((producto, index) => `
        <li>${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}
            <button data-index="${index}" onclick="quitarDelCarrito(${index}, 1)">Quitar 1</button>
            <button data-index="${index}" onclick="quitarDelCarrito(${index}, ${producto.cantidad})">Quitar Todos</button>
        </li>`);

    carritoElement.innerHTML = `
        <p>Total de la compra: $${total.toFixed(2)}</p>
        <ul>${listaProductos.join('')}</ul>
    `;

    console.log(carrito);
}*/
function enviarCarritoPorWhatsApp() {
    // Verificar si hay productos en el carrito
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de contactar por WhatsApp.");
        return;
    }

    // Construir el mensaje del carrito
    let mensaje = "¡Hola! Estoy interesado en los siguientes productos:\n";

    carrito.forEach(producto => {
        mensaje += `${producto.nombre} x ${producto.cantidad}\n`;
    });

    // Construir la URL de WhatsApp
    const numeroTelefono = '+573103634938';
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
}

// Resto de tu código...

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const producto = {
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };
        carrito.push(producto);
    }

    actualizarCarrito();
}

function quitarDelCarrito(index, cantidad) {
    const producto = carrito[index];

    producto.cantidad += cantidad;

    // Si la cantidad es menor o igual a 0, elimina el producto del carrito
    if (producto.cantidad <= 0) {
        carrito.splice(index, 1);
    }

    actualizarCarrito();
}

function toggleCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.classList.toggle("oculto");
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");

    let total = 0;

    // Crear la lista de productos en el carrito
    const listaProductos = carrito.map((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        return `
            <li>${producto.nombre} x ${producto.cantidad} - $${subtotal.toFixed(2)}
                <button data-index="${index}" onclick="quitarDelCarrito(${index}, -1)">-</button>
                <button data-index="${index}" onclick="quitarDelCarrito(${index}, 1)">+</button>
            </li>`;
    });

    carritoElement.innerHTML = `
        <p>Total de la compra: $${total.toFixed(2)}</p>
        <ul>${listaProductos.join('')}</ul>
    `;

    console.log(carrito);
}

