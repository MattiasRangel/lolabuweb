# LolaBu: tienda virtual de accesorios para mascotas

Sitio web de comercio electrónico (frontend) para una tienda de accesorios para mascotas, con catálogo, carrito de compras y cierre del pedido por WhatsApp. Proyecto académico de Ingeniería de Sistemas (Universidad de Pamplona), publicado en un hosting gratuito.

## Funcionalidades

- **Catálogo de productos** con tarjetas, precios y botón de "agregar al carrito".
- **Carrito persistente:** se conserva entre páginas mediante `localStorage`.
- **Checkout por WhatsApp:** el pedido se envía con el detalle de productos al WhatsApp de la tienda para cerrar la venta y coordinar el pago.
- **Páginas informativas:** la tienda, ubicación y confirmación de compra.
- **Diseño responsive** para celular y escritorio.

## Ingeniería de requisitos

Antes de maquetar, elaboré los diagramas **UML de casos de uso y de secuencia** del flujo de compra.

## Tecnologías

HTML5 · CSS3 · JavaScript (vanilla) · `localStorage` · UML

## Estructura

```
index.html       Inicio y productos destacados
productos.html   Catálogo completo
tienda.html      Información de la tienda
ubicacion.html   Ubicación
checkout.html    Confirmación del pedido
pago.html        Selección del método de pago
gracias.html     Confirmación de compra
script.js        Lógica del carrito
style.css        Estilos
imagenes/        Imágenes de productos
```

## Cómo ejecutarlo

No requiere instalación: abre `index.html` en el navegador o usa la extensión Live Server de VS Code.

## Autor

Eduard Mattias Rangel Ramírez · [LinkedIn](https://www.linkedin.com/in/mattias-rangel-8abab0310) · [GitHub](https://github.com/MattiasRangel)
