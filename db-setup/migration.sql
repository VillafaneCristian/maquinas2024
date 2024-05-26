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
	dependencias_id varchar(15),
	primary key (id)	
); 

drop table if exists areas;

create table areas (
	id varchar(15),
	nombre varchar(150),
	encargado varchar(100),
	email varchar(100),
	domicilio varchar(30),
	telefono integer,
	primary key (id)	
); 

drop table if exists operadores;

create table operadores (
	id varchar(25),
	nombre varchar(50),
	apellido varchar(50),
	email varchar(100),
	contraseña varchar(200),
	avatar varchar(200),
	primary key (id)	
); 