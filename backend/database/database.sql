CREATE DATABASE IF NOT EXISTS muevetedb;

USE muevetedb;

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    picture VARCHAR(100),
    text VARCHAR(500) NOT NULL,
    date DATETIME NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO posts (title, picture, text, date)
VALUES ('Torrecerredo', '/Torrecerredo.jpg', 'Bonitas vistas desde la cima, aquí tiene que ir un texto más largo para que se vea su versión acortada y luego haya un botón para ver el contenido completo PRUEBA DE SI HAY CORTE', '2023-06-26');

INSERT INTO posts (title, picture, text, date)
VALUES ('San Martín', '/Torrecerredo.jpg', 'Bonitas vistas desde la cima, aquí tiene que ir un texto más largo para que se vea su versión acortada y luego haya un botón para ver el contenido completo PRUEBA DE SI HAY CORTE', '2023-06-26');

INSERT INTO posts (title, picture, text, date)
VALUES ('Cares', '/Torrecerredo.jpg', 'Bonitas vistas desde la cima, aquí tiene que ir un texto más largo para que se vea su versión acortada y luego haya un botón para ver el contenido completo PRUEBA DE SI HAY CORTE', '2023-06-26');