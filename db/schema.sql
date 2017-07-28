### Schema

CREATE DATABASE eat_db;
USE eat_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date int, 
	PRIMARY KEY (id)
);
