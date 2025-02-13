document.addEventListener("DOMContentLoaded", function () {
    fetch("assets/data/productos.json")
        .then(response => response.json())
        .then(data => {
            const productosContainer = document.getElementById("productos");
            data.forEach(producto => {
                const productoDiv = document.createElement("div");
                productoDiv.classList.add("producto");
                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p class="precio">Q${producto.precio}.00</p>
                    <button class="btn-comprar">Comprar</button>
                `;
                productosContainer.appendChild(productoDiv);
            });
        })
        .catch(error => console.error("Error cargando los productos:", error));
});

