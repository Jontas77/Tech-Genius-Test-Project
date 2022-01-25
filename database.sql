CREATE TABLE employees (
    id                  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name          VARCHAR(255) NOT NULL,
    last_name           VARCHAR(255) NOT NULL,
    telephone_number    INT,
    email               VARCHAR(255) UNIQUE,
    employee_manager    VARCHAR(255) NOT NULL,
    status     VARCHAR(255) NOT NULL,
    password   VARCHAR(255) NOT NULL
);

CREATE TABLE managers (
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    manager_name        VARCHAR(255) NOT NULL,
    manager_surname     VARCHAR(255) NOT NULL,
    email       VARCHAR(255) UNIQUE,
    password    VARCHAR(255) NOT NULL
);

CREATE TABLE hr_admin (
    id    uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_name  VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name     VARCHAR(255) NOT NULL,
    department_status   VARCHAR(255) NOT NULL    
);
