
document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    { nombre: "Pasta Italiana Clásica", precio: 30 },
    { nombre: "Panadería Artesanal", precio: 28 },
    { nombre: "Cocina Vegana Gourmet", precio: 35 },
    { nombre: "Carnes y Parrilla", precio: 32 },
    { nombre: "Repostería Francesa", precio: 34 },
    { nombre: "Tapas Españolas Creativas", precio: 27 },
    { nombre: "Sushi y Cocina Japonesa", precio: 40 },
    { nombre: "Cocina Árabe Tradicional", precio: 29 },
    { nombre: "Pescados y Mariscos", precio: 33 },
    { nombre: "Street Food Asiático", precio: 30 },
    { nombre: "Comida Mexicana Moderna", precio: 31 },
    { nombre: "Cocina India con Especias", precio: 30 },
    { nombre: "Postres sin Gluten", precio: 26 },
    { nombre: "Ensaladas Gourmet", precio: 24 },
    { nombre: "Cocina Peruana Nikkei", precio: 36 },
    { nombre: "Heladería Artesanal", precio: 25 },
    { nombre: "Sopas del Mundo", precio: 22 },
    { nombre: "Cocina Mediterránea", precio: 28 },
    { nombre: "Cocina China Regional", precio: 29 },
    { nombre: "Bebidas y Cócteles", precio: 23 },
    { nombre: "Cocina Coreana", precio: 30 },
    { nombre: "Pizza Napolitana", precio: 27 },
    { nombre: "Cocina Africana", precio: 30 },
    { nombre: "Galletas y Masas Finas", precio: 26 },
    { nombre: "Fermentados Caseros", precio: 25 },
    { nombre: "Brunch Creativo", precio: 28 },
    { nombre: "Cocina de Autor", precio: 35 },
    { nombre: "Técnicas de Emplatado", precio: 26 },
    { nombre: "Cocina Francesa", precio: 32 },
    { nombre: "Food Styling y Fotografía", precio: 28 },
    { nombre: "Cocina para Niños", precio: 20 },
    { nombre: "Cocina sin Lácteos", precio: 24 },
    { nombre: "Cocina en Pareja", precio: 30 },
    { nombre: "Batch Cooking", precio: 22 },
    { nombre: "Cocina Saludable", precio: 28 },
  ];

  const contenedor = document.getElementById("cursos");
  contenedor.innerHTML = cursos.map(curso => `
    <div class="border p-4 rounded-lg shadow">
      <h3 class="text-xl mb-2">${curso.nombre}</h3>
      <p class="mb-1">Precio: €${(curso.precio * 0.9).toFixed(2)} (10% OFF)</p>
      <button class="bg-orange-500 text-white py-1 px-4 rounded">Comprar</button>
    </div>
  `).join("");
});
