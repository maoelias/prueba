const express = require("express");
const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Base de datos simulada (productos)
const productos = [
  {
    buyPrice: 183520.78543714658,
    detail: null,
    erp: null,
    name: "ALIMENTO PARA PERRO DOG CHOW CACHORROS MINIS Y PEQUEÑOS BULTO (22.7 KG)",
    price: 210957.14286,
    priceRecomended: 266190.1704,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Perros", "dogourmet"],
    estado: "Activo",
    favoritos: true,
  },
  {
    buyPrice: 123456.789,
    detail: null,
    erp: null,
    name: "ALIMENTO PARA GATO WHISKAS SABOR POLLO (10 KG)",
    price: 150000.0,
    priceRecomended: 180000.0,
    priceType: "WEB",
    bannerResponse: null,
    clasificaciones: ["Gatos", "Whiskas"],
    estado: "Inactivo",
    favoritos: false,
  },
  {
    buyPrice: 89000.5678,
    detail: null,
    erp: null,
    name: "CAMA PARA PERRO MEDIANA - COLOR AZUL",
    price: 95000.0,
    priceRecomended: 110000.0,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Accesorios", "Perros"],
    estado: "Activo",
    favoritos: true,
  },
  {
    buyPrice: 67000.4512,
    detail: null,
    erp: null,
    name: "JUGUETE PARA GATO RATÓN INTERACTIVO",
    price: 70000.0,
    priceRecomended: 80000.0,
    priceType: "WEB",
    bannerResponse: null,
    clasificaciones: ["Juguetes", "Gatos"],
    estado: "Activo",
    favoritos: false,
  },
  {
    buyPrice: 54000.123,
    detail: null,
    erp: null,
    name: "CORREA RETRÁCTIL PARA PERROS - 5 METROS",
    price: 60000.0,
    priceRecomended: 70000.0,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Accesorios", "Perros"],
    estado: "Activo",
    favoritos: true,
  },
  {
    buyPrice: 149999.99,
    detail: null,
    erp: null,
    name: "RASCADOR PARA GATO PREMIUM CON JUGUETE",
    price: 160000.0,
    priceRecomended: 180000.0,
    priceType: "WEB",
    bannerResponse: null,
    clasificaciones: ["Accesorios", "Gatos"],
    estado: "Activo",
    favoritos: false,
  },
  {
    buyPrice: 250000.75,
    detail: null,
    erp: null,
    name: "CASA PARA PERRO PEQUEÑO - COLOR GRIS",
    price: 270000.0,
    priceRecomended: 300000.0,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Accesorios", "Perros"],
    estado: "Inactivo",
    favoritos: true,
  },
  {
    buyPrice: 199999.49,
    detail: null,
    erp: null,
    name: "ALIMENTO PARA AVES PREMIUM (5 KG)",
    price: 220000.0,
    priceRecomended: 250000.0,
    priceType: "WEB",
    bannerResponse: null,
    clasificaciones: ["Aves", "Alimentos"],
    estado: "Activo",
    favoritos: false,
  },
  {
    buyPrice: 119999.59,
    detail: null,
    erp: null,
    name: "KIT DE LIMPIEZA PARA PECERAS (INCLUYE FILTRO)",
    price: 130000.0,
    priceRecomended: 145000.0,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Peces", "Limpieza"],
    estado: "Activo",
    favoritos: true,
  },
  {
    buyPrice: 15999.99,
    detail: null,
    erp: null,
    name: "JUGUETE PARA CACHORROS HUESO DE GOMA",
    price: 17000.0,
    priceRecomended: 20000.0,
    priceType: "WEB",
    bannerResponse: null,
    clasificaciones: ["Juguetes", "Perros"],
    estado: "Activo",
    favoritos: true,
  },
  {
    buyPrice: 34999.95,
    detail: null,
    erp: null,
    name: "PLATO DOBLE PARA MASCOTAS (ACERO INOXIDABLE)",
    price: 38000.0,
    priceRecomended: 42000.0,
    priceType: "APP",
    bannerResponse: null,
    clasificaciones: ["Accesorios", "Perros", "Gatos"],
    estado: "Activo",
    favoritos: false,
  }
];

// Endpoint POST para filtrar productos
app.post("/filtrar-productos", (req, res) => {
  const { favoritos, clasificaciones, estado } = req.body;

  // Filtrar productos según la entrada
  const resultado = productos.filter((producto) => {
    return (
      producto.favoritos === favoritos &&
      producto.estado === estado &&
      clasificaciones.every((clas) => producto.clasificaciones.includes(clas))
    );
  });

  res.json(resultado); // Respuesta al cliente
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
