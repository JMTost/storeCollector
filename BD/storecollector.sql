CREATE DATABASE  IF NOT EXISTS `storecollector` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `storecollector`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: storecollector
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id_carrito` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_objeto` int NOT NULL,
  KEY `id_usuario` (`id_usuario`),
  KEY `id_objeto` (`id_objeto`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_objeto`) REFERENCES `objeto` (`id_objeto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (1,1,1);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'comic','Historia animada de personajes ficticios, principalmente superheroes'),(2,'Juguetes','Juguetes de diferentes tematicas');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objeto`
--

DROP TABLE IF EXISTS `objeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objeto` (
  `id_objeto` int NOT NULL,
  `nombre_objeto` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `estado` int NOT NULL,
  `precio` float NOT NULL,
  `contacto` varchar(250) DEFAULT NULL,
  `nombre_imagen` varchar(100) DEFAULT NULL,
  `id_usuario` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_objeto`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `objeto_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `objeto_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objeto`
--

LOCK TABLES `objeto` WRITE;
/*!40000 ALTER TABLE `objeto` DISABLE KEYS */;
INSERT INTO `objeto` VALUES (1,'Pretty Violent #1','Comic Pretty Violent #1 firmado por Ryan Ottley',10,250,NULL,NULL,1,1),(2,'Spider-Man 2099: Exodus Alpha #1','Comic del Hombre araña 2099, del año 2022\nDe Steve',10,1100,'correo electronico: qwerty@hotmail.com\nInstagram: @comics_chima',NULL,2,1),(3,'Grogu-the mandalorian','Figura Funko pop de Grogu con una bola',10,600,'Instagram: @tienditadefunkos\ncorreo eléctronico: tienditadefunkos@gmail.com',NULL,3,2),(4,'black panther ','Prueba de creacion',8,150,'telefono: 5656545654','1652056756796.jpeg',1,1),(5,'The killing joke','Comic hecho por Dennis O\'Neil, primera edicion',9,1500,'por correo electronico: iahjkah@gmail.com','1652208982918.jpeg',3,1),(6,'The killing joke','Comic hecho por Dennis O\'Neil, primera edicion',9,1500,'por correo electronico: iahjkah@gmail.com','1652209059196.jpeg',3,1),(7,'Batman who laughs','comic en buenas condiciones',8,100,'instagram','1652209235737.jpeg',3,1),(8,'Thor: renacido','comic creado por  J. Michael Straczynski (Autor)',10,1500,'Pagina de facebook: comics store\r\nInstagram: @comicStore_chimal','1652209904716.jpeg',1,1),(9,'Thor who holds the hammer?','Por Jason Aaron',6,340,'Enlace de venta: https://www.amazon.com.mx/Thor-2-Who-Holds-Hammer/dp/0785197850/ref=asc_df_0785197850/?tag=gledskshopmx-20&linkCode=df0&hvadid=329497570229&hvpos=&hvnetw=g&hvrand=244058303485681820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&','1652210170175.jpeg',4,1);
/*!40000 ALTER TABLE `objeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `password` varchar(25) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'qwerty','qwerty@hotmail.com','qwerty','qwerty'),(2,'Juan Perez','JuanPerez@hotmail.com','JP','JP'),(3,'Jesus Maximiliano Tostado Navarro','pruebaCorreo@gmail.com','JM_tost','prueba1231456_'),(4,'ojaoijdfdsjfd','perezJ@gmail.com','Perez_j','465sdf_'),(5,'aakjhdajskdh ajkhsjdak dh','akjshdaksj@gmail.com','prueba_k','12543');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `id_venta` int NOT NULL,
  `descripcion_venta` varchar(50) NOT NULL,
  `id_usuario_v` int NOT NULL,
  `id_usuario_c` int NOT NULL,
  `id_objeto` int NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `id_usuario_v` (`id_usuario_v`),
  KEY `id_usuario_c` (`id_usuario_c`),
  KEY `id_objeto` (`id_objeto`),
  CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_usuario_v`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`id_usuario_c`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `venta_ibfk_3` FOREIGN KEY (`id_objeto`) REFERENCES `objeto` (`id_objeto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,'Primera Venta',1,2,1);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 15:50:00
