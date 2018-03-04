-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "favorite_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE burger (
	id INTEGER(10) auto_increment NOT NULL,
	burger_name VARCHAR(50),
    devoured boolean,
    primary key (id)

);

