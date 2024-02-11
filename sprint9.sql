select * from usuarios
select * from tareas

create table usuarios(
	id serial primary key,
	nombre text,
);

create table tareas (
	id serial primary key,
	titulo text,
	prioridad_id int,
	usuario_id int,
	completado boolean
);

insert into usuarios (id, nombre) values (1, 'admin')

insert into tareas (id, titulo, prioridad_id, usuario_id, completado) values (1, 'Prueba 1', 1, 1, true)
insert into tareas (id, titulo, prioridad_id, usuario_id, completado) values (2,'Prueba 2', 1, 1, false)
