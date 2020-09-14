/*
Navicat MySQL Data Transfer

Source Server         : Localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : inundacion

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-09-14 10:51:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for alarma
-- ----------------------------
DROP TABLE IF EXISTS `alarma`;
CREATE TABLE `alarma` (
  `id_alarma` int(11) NOT NULL AUTO_INCREMENT,
  `estado` int(1) DEFAULT 0,
  PRIMARY KEY (`id_alarma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of alarma
-- ----------------------------
INSERT INTO `alarma` VALUES ('2', '0');

-- ----------------------------
-- Table structure for datos
-- ----------------------------
DROP TABLE IF EXISTS `datos`;
CREATE TABLE `datos` (
  `id_dato` int(11) NOT NULL AUTO_INCREMENT,
  `valor` double(11,5) DEFAULT 0.00000,
  `valor_2` double(11,5) DEFAULT 0.00000,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id_dato`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datos
-- ----------------------------
INSERT INTO `datos` VALUES ('1', '20.00000', '33.00000', '2020-09-03', '22:03:04', '0');
INSERT INTO `datos` VALUES ('2', '20.00000', '33.00000', '2020-09-03', '22:09:11', '0');
INSERT INTO `datos` VALUES ('3', '30.00000', '10.00000', '2020-09-03', '22:14:42', '0');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `estado` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('1', 'Carlos Mino', 'calolomino@gmail.com', '12345', '0');
