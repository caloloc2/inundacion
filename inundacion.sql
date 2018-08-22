/*
Navicat MySQL Data Transfer

Source Server         : AWS NIBEMI
Source Server Version : 50559
Source Host           : 34.223.215.43:3306
Source Database       : inundacion

Target Server Type    : MYSQL
Target Server Version : 50559
File Encoding         : 65001

Date: 2018-08-22 14:03:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for alarma
-- ----------------------------
DROP TABLE IF EXISTS `alarma`;
CREATE TABLE `alarma` (
  `id_alarma` int(11) NOT NULL AUTO_INCREMENT,
  `estado` int(1) DEFAULT '0',
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
  `valor` double(11,5) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `estado` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_dato`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datos
-- ----------------------------
INSERT INTO `datos` VALUES ('12', '12.00000', '2018-08-02', '15:04:49', '0');
INSERT INTO `datos` VALUES ('13', '12.00000', '2018-08-02', '15:05:59', '0');
INSERT INTO `datos` VALUES ('14', '15.00000', '2018-08-02', '15:06:03', '0');
INSERT INTO `datos` VALUES ('15', '14.00000', '2018-08-02', '15:06:07', '0');
INSERT INTO `datos` VALUES ('16', '12.00000', '2018-08-02', '17:40:43', '0');
INSERT INTO `datos` VALUES ('17', '12.00000', '2018-08-02', '18:14:01', '0');
INSERT INTO `datos` VALUES ('18', '12.00000', '2018-08-02', '18:14:10', '0');
INSERT INTO `datos` VALUES ('19', '12.00000', '2018-08-02', '18:14:11', '0');
INSERT INTO `datos` VALUES ('20', '12.00000', '2018-08-02', '18:14:12', '0');
INSERT INTO `datos` VALUES ('21', '12.00000', '2018-08-02', '18:14:12', '0');
INSERT INTO `datos` VALUES ('22', '12.00000', '2018-08-02', '18:14:13', '0');
INSERT INTO `datos` VALUES ('23', '12.00000', '2018-08-02', '18:14:13', '0');
INSERT INTO `datos` VALUES ('24', '12.00000', '2018-08-02', '23:05:35', '0');
INSERT INTO `datos` VALUES ('25', '12.00000', '2018-08-03', '15:43:53', '0');
INSERT INTO `datos` VALUES ('26', '12.00000', '2018-08-04', '12:15:16', '0');
INSERT INTO `datos` VALUES ('27', '12.00000', '2018-08-07', '20:13:39', '0');
INSERT INTO `datos` VALUES ('28', '12.00000', '2018-08-11', '21:35:48', '0');
INSERT INTO `datos` VALUES ('29', '12.00000', '2018-08-20', '16:11:41', '0');
INSERT INTO `datos` VALUES ('30', '12.00000', '2018-08-20', '16:11:43', '0');
