### Schema

DROP DATABASE IF EXISTS hippos_db;
CREATE DATABASE hippos_db;
USE hippos_db;

CREATE TABLE hippos
(
	id int NOT NULL AUTO_INCREMENT,
	food_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
