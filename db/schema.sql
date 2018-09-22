ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''

CREATE DATABASE if not exists burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL auto_increment,
burger varchar(50) NOT NULL,
eaten bool default false,
primary key (id) 
);
 
Insert into burgers (burger, eaten) values ('mac and cheese burger', false);
Insert into burgers (burger, eaten) values ('cheese burger', false);
Insert into burgers (burger, eaten) values ('skinny burger', false);