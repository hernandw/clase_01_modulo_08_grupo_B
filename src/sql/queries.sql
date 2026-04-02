--Crear la base de datos:
create database courses_students_sql_db;

--Crear las tablas

create table courses (
    id serial primary key,
    title varchar(255) not null,
    description text,
    price numeric(10, 2) not null,
    category_id integer not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    foreign key (category_id) references categories(id)
    on delete cascade
);

create table categories (
    id serial primary key,
    name varchar(255) not null
    
);
