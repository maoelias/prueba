-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2024 a las 14:39:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `modelos_er`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificaciones`
--

CREATE TABLE `clasificaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clasificaciones`
--

INSERT INTO `clasificaciones` (`id`, `nombre`) VALUES
(1, 'Comida'),
(2, 'Juguetes'),
(3, 'Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `clasificacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `clasificacion_id`) VALUES
(1, 'Croquetas para perros', 'Alimento balanceado para perros adultos', 15.99, 'croquetas_perro.jpg', 1),
(2, 'Pelota de juguete', 'Pelota resistente para perros', 5.49, 'pelota_juguete.jpg', 2),
(3, 'Correa para perros', 'Correa ajustable de 1.5 metros', 9.99, 'correa_perro.jpg', 3),
(4, 'Croquetas para perros adultos', 'Alimento completo para perros adultos de tamaño mediano', 15.99, 'croquetas_perro.jpg', 1),
(5, 'Pienso para gatos de interior', 'Pienso especial para gatos de interior, reduce el pelo en el ambiente', 14.50, 'pienso_gato.jpg', 1),
(6, 'Galletas para perros', 'Galletas nutritivas para perros, ideal como premio', 5.99, 'galletas_perro.jpg', 1),
(7, 'Pelota de juguete para perros', 'Pelota resistente, ideal para perros activos', 6.99, 'pelota_juguete.jpg', 2),
(8, 'Ratón de peluche para gatos', 'Juguete de peluche en forma de ratón para gatos', 4.49, 'raton_gato.jpg', 2),
(9, 'Cuerda para perros', 'Cuerda resistente para masticar y jugar', 7.99, 'cuerda_perro.jpg', 2),
(10, 'Correa de cuero para perros', 'Correa de cuero resistente, ideal para paseos largos', 18.99, 'correa_cuero.jpg', 3),
(11, 'Arnés para gatos', 'Arnés ajustable para gatos, cómodo y seguro', 9.49, 'arnes_gato.jpg', 3),
(12, 'Jaula para roedores', 'Jaula espaciosa para roedores, incluye ruedas y accesorios', 30.00, 'jaula_roedores.jpg', 3),
(13, 'Bowl de acero inoxidable para perros', 'Recipiente de acero inoxidable para comida o agua', 8.99, 'bowl_acero.jpg', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clasificacion_id` (`clasificacion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clasificaciones`
--
ALTER TABLE `clasificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`clasificacion_id`) REFERENCES `clasificaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
