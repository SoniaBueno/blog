CREATE DATABASE IF NOT EXISTS muevetedb;

USE muevetedb;

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    picture VARCHAR(100),
    text VARCHAR(280) NOT NULL,
    date DATETIME NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO posts (id, title, picture, text, date)
VALUES (1, 'Picu Pienzu', 'Falta la imagen.URL' 'Bonitas vistas desde la cima, aquí tiene que ir un texto más largo para que se vea su versión acortada y luego haya un botón para ver el contenido completo', '2023-06-26 16:55:00');