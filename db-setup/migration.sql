drop database if exists maquinas;

create database maquinas; 

use maquinas;

drop table if exists dependencias;

create table dependencias (
	id varchar(15),
	nombre varchar(150),
	email varchar(100),
	piso tinyint,
	lado varchar(15),
	observaciones varchar(500),
	primary key (id)
);

drop table if exists usuarios;

create table usuarios (
	id varchar(25),
	nombre varchar(50),
	apellido varchar(50),
	email varchar(100),
	dependencia_id varchar(15),
	primary key (id)	
); 