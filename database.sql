CREATE DATABASE hr_admin;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employees (
    employee_id         uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name          VARCHAR(255),
    last_name           VARCHAR(255),
    telephone_number    INT,
    employee_email      VARCHAR(255) UNIQUE,
    manager             VARCHAR(255),
    employee_status     VARCHAR(255),
    employee_password   VARCHAR(255) 
);

CREATE TABLE managers (
    manager_id          SERIAL PRIMARY KEY,
    manager_email       VARCHAR(255) UNIQUE,
    manager_password    VARCHAR(255)
);

CREATE TABLE admin (
    admin_id            uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_name          VARCHAR(255),
    admin_email         VARCHAR(255) UNIQUE,
    admin_password      VARCHAR(255) 
);

CREATE TABLE departments (
    department_id       SERIAL PRIMARY KEY,
    employee_id         uuid REFERENCES employees(employee_id),
    manager_id          INT REFERENCES managers(manager_id),
    admin_id            uuid REFERENCES admin(admin_id),
    department_name     VARCHAR(255),
    department_status   VARCHAR(255)   
);
