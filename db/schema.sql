DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;
USE user_db;

-- Posts Table
-- CREATE TABLE posts (
-- 	`ID` INT(10) NOT NULL AUTO_INCREMENT,
-- 	`Title` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
-- 	`Message` TEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
-- 	`createdat` datetime DEFAULT NULL COMMENT 'created time',
-- 	`updatedat` datetime DEFAULT NULL COMMENT 'updated time',
-- 	UNIQUE INDEX ID (ID) USING BTREE
-- )
-- COLLATE='utf8mb4_0900_ai_ci'
-- ENGINE=InnoDB
-- ;

-- User Table
--CREATE TABLE `user` (
--	`id` INT(10) NOT NULL AUTO_INCREMENT,
--	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
--	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
--	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
--	PRIMARY KEY (`id`) USING BTREE,
--	UNIQUE INDEX `email` (`email`) USING BTREE
--)
--COLLATE='utf8mb4_0900_ai_ci'
--ENGINE=InnoDB
--;