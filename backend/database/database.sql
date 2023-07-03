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
VALUES ('Torrecerredo', '/Torrecerredo.jpg', 'Es la montaña más alta de los Picos de Europa. Está enclavada en el Macizo Central de los Picos de Europa o macizo de los Urrieles, en la divisoria de las provincias de Asturias y León. Su cima, con un desnivel de más de 2200 metros sobre el río Cares, posee unas magníficas vistas del macizo Occidental y de las canales que vierten sobre la garganta del Cares.', '2023-06-26');

INSERT INTO posts (title, picture, text, date)
VALUES ('Pico Pienzu', '/PicoPienzu.jpg', 'Si te gusta el senderismo esta es tu ruta, puedes subir al pico solo caminando. El Pico Pienzu se encuentra en la Sierra del Sueve, una cadena montañosa que se extiende entre los concejos de Caravia, Colunga, Parres y Piloña. Es conocido por ser uno de los miradores más destacados de la costa asturiana, ya que desde su cumbre se puede disfrutar de una impresionante vista panorámica del mar Cantábrico y los valles circundantes.', '2023-06-27');

INSERT INTO posts (title, picture, text, date)
VALUES ('¿Sabes qué...? El Kilimanjaro', '/Torrecerredo.jpg', 'Su cima está cubierta por nieve y hielo, a pesar de estar cerca del ecuador. Es el único lugar en África donde se puede encontrar nieve en la cima durante todo el año. Esta peculiaridad ha sido una de las principales razones por las que es un destino popular para aventureros de todo el mundo.', '2023-06-28');

INSERT INTO posts (title, picture, text, date)
VALUES ('Ruta del Cares', '/RutaCares.jpg', 'Atrévete a comenzarla desde Poncebos. La ruta fue construida originalmente en la década de 1940 para permitir el mantenimiento del canal de desvío del río Cares, que se utiliza para alimentar una central hidroeléctrica cercana. A lo largo de los años, se ha convertido en una popular atracción turística debido a su belleza natural.', '2023-06-29');

INSERT INTO posts (title, picture, text, date)
VALUES ('Naranjo de Bulnes', '/NaranjoBulnes.jpg', 'Pico emblemático del norte peninsular. En la base del Naranjo de Bulnes se encuentra el Refugio de la Vega de Urriellu, que ofrece alojamiento y servicios para los montañistas que desean ascender a la cumbre. El refugio es un punto de partida común para las expediciones y también un lugar para descansar y disfrutar de las vistas impresionantes.', '2023-06-30');

INSERT INTO posts (title, picture, text, date)
VALUES ('¿Sabes qué...? El Everest', '/Everest.jpg', '¡Es escalón Hillary varía de altura! Esto se debe a la actividad sísmica! El escalón Hillary es una característica distintiva en la ruta de ascenso al Monte Everest desde el lado sur, conocida como la ruta del collado sur. Recibe su nombre en honor a Sir Edmund Hillary.', '2023-07-01');