### Schema

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE hippos_db;
USE hippos_db;

CREATE TABLE hippos
(
	id int NOT NULL AUTO_INCREMENT,
	food_name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
