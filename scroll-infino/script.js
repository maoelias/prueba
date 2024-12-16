const products = Array.from({ length: 100 }).map((_, i) => ({
    name: `Producto ${i + 1}`,
    image: "https://via.placeholder.com/150",  // Imagen genérica por defecto
    description: `Descripción del producto ${i + 1}`,
    price: (Math.random() * 100 + 1).toFixed(2),
    classification: i % 3 === 0 ? "Alimentación" : i % 3 === 1 ? "Accesorios para el Paseo" : "Higiene y Cuidado", 
    // Asignación de imágenes según la categoría
  }));

  
  // Asignación de imágenes según la categoría
  const categoryImages = {
    "Alimentación": "images/alimentacion.jpg",
    "Accesorios para el Paseo": "images/accesorios.jpg",
    "Higiene y Cuidado": "images/higiene.jpg",
  };
 
  // Asignar las imágenes correspondientes a los productos
  products.forEach(product => {
    product.image = categoryImages[product.classification];
  });
  
  const productList = document.getElementById("productList");
  const categoryFilter = document.getElementById("categoryFilter"); 
  let displayedProducts = 0;
  const batchSize = 10;
  
  // Inicializar filtro de categorías
  const uniqueCategories = [...new Set(products.map(p => p.classification))];
  uniqueCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  
  function loadProducts() {
    const filter = categoryFilter.value; 
    const filteredProducts = products.filter(p => !filter || p.classification === filter);
    const nextBatch = filteredProducts.slice(displayedProducts, displayedProducts + batchSize);
    
    nextBatch.forEach(product => {
      const productElement = document.createElement("div");
      productElement.className = "product col-12 col-md-4";
      productElement.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-primary">Precio: $${product.price}</p>
          </div>
        </div>
      `;
      productList.appendChild(productElement);
    });
    displayedProducts += nextBatch.length;
  }
  
  // Detectar scroll para cargar más productos
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadProducts();
    }
  });
  
  // Detectar cambios en el filtro
  categoryFilter.addEventListener("change", () => {
    displayedProducts = 0;
    productList.innerHTML = "";
    loadProducts();
  });
  
  // Cargar los primeros productos al iniciar
  loadProducts();
  