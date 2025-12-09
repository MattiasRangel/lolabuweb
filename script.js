// script.js - FUNCIONA EN INDEX Y PRODUCTOS.HTML
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const confirmarPedidoBtn = document.getElementById('confirmar-pedido'); // AQUÍ ESTABA EL ERROR

cargarEventListeners();

function cargarEventListeners() {
    if (elementos1) {
        elementos1.addEventListener('click', comprarElemento);
    }
    if (carrito) {
        carrito.addEventListener('click', eliminarElemento);
    }
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    // BOTÓN CONFIRMAR PEDIDO (funciona en todas las páginas)
    if (confirmarPedidoBtn) {
        confirmarPedidoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (lista.children.length === 0) {
                alert('El carrito está vacío');
                return;
            }
            localStorage.setItem('carritoLolaBu', lista.innerHTML);
            window.location.href = 'checkout.html';
        });
    }

    // Cargar carrito guardado
    document.addEventListener('DOMContentLoaded', () => {
        const guardado = localStorage.getItem('carritoLolaBu');
        if (guardado && lista) {
            lista.innerHTML = guardado;
        }
    });
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.closest('.product');
        if (!producto) return;

        const info = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.precio').textContent,
            id: e.target.getAttribute('data-id')
        };
        insertarCarrito(info);
    }
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${elemento.imagen}" width="100"></td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td><a href="#" class="borrar-elemento" data-id="${elemento.id}">X</a></td>
    `;
    lista.appendChild(row);
    guardarCarrito();
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-elemento')) {
        e.target.parentElement.parentElement.remove();
        guardarCarrito();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    localStorage.removeItem('carritoLolaBu');
}

function guardarCarrito() {
    localStorage.setItem('carritoLolaBu', lista.innerHTML);
}