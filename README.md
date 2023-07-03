# Blog sencillo

## ¿Qué necesitas saber para ver mi proyecto?

1. El script SQL está en **blog/backend/database/database.sql**
2. Las variables de entorno están configuradas y enlazadas para la conexión con la base de datos en backend/src/env/.env
3. El proyecto está dividido en una carpeta backend y en una frontend, cada una con su package-json. Instala las dependencias de **ambas**:
  - cd backend: `npm i`
  - cd frontend: `npm i`
4. Empezamos:
  - Para iniciar backend: comando `npm start` desde blog/backend.
  - Para iniciar frontend: comando `npm run start` desde blog/frontend.

## ¿Qué puedes hacer en el blog?
- http://localhost:3000/ -> se muestra un header, un botón para añadir entrada nueva, un listado de entradas en su versión acortada y un footer. Cada entrada permite acceder a su versión completa haciendo clic sobre la imagen o sobre el título y tiene un botón de borrar de tipo icono completamente funcional (elimina la entrada de la base de datos, la imagen de la carpeta public y avisa al usuario con un modal de que la entrada ha sido borrada).
- http://localhost:3000/new -> pulsando en el botón de añadir entrada nueva. Aquí se puede crear una nueva entrada con una imagen, un título y un texto que agrega el usuario, acompañado de la fecha. El botón de guardar envía la nueva entrada a la base de datos (imagen tiene que salir en la carpeta public) y redirige hacia http://localhost:3000/ para ver la nueva entrada en la parte inferior.
- http://localhost:3000/post/:id -> apretando la imagen o el título de cualquier entrada de http://localhost:3000/. Se puede ver la entrada completa, borrarla, editarla y después guardar los cambios. También hay un modal que avisa si se ha borrado.
- Header.jsx -> permite volver a vista principal haciendo clic sobre el título «Muévete».

# ¿Cómo lo he hecho?

## Primeros pasos

Lectura del PDF con las instrucciones y toma de decisiones. Al leer el PDF voy haciéndome una idea de todo lo que debe tener el blog e identifico qué he puesto en práctica alguna vez (por ejemplo, recoger texto de un input y almacenarlo en la base de datos) y lo que nunca he implementado (manejo de imágenes en la carpeta public).

Por otro lado dibujo en papel cómo quiero que se vea cada vista/page del blog y empiezo a pensar en componentes. También decido la temática del blog, su estilo y la paleta de colores.

Una vez hecho esto creo el repositorio y voy de lo que me parece más sencillo hacia lo complejo.

## Creación de las carpetas BACKEND y FRONTEND dentro del mismo repositorio.

Instalación de Node.JS, React y librerías, siendo consciente de que instalaré más según surjan necesidades:
- Backend: ``npm init -y``, ``npm i express dotenv date-fns esm mysql2``(express, variables de entorno, librería específica para fechas de los posts y controlador de Node.js para interactuar con bases de datos MySQL), ``npm install -g nodemon``, ``npm i nodemon`` (para actualización automática cuando haya modificaciones en rutas y controladores del backend).
- Frontend: blog desarrollado con React. ``npx create-react-app .``, ``npm install react-bootstrap@next bootstrap@5.3.0``(react-bootstrap y bootstrap 5), ``npm i react-router-dom``

## EN BACKEND. Carpetas:
1. Carpeta database.
2. Carpeta src con tres carpetas y dos archivos:
  - **controllers**: para mí, el archivo más complejo de todos.
  - **routes**: esbozo los endpoints que voy a necesitar, aunque los dejo comentados y los voy descomentando según los vaya usando.
  - env con el archivo con las variables de entorno necesarias.
  - app.js, donde irán enrutados los futuros endpoints.
  - db.js, para conectar con la base de datos.
3. En el package.json le indico cómo quiero que inicie el proyecto añadiendo a los scripts:
```
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
```

## EN FRONTEND. Carpetas:
1. Proyecto de React viene con carpeta public, que es donde guardo las imágenes de las entradas.
2. En src creo dos carpetas:
  - **components**: aquí están el header y el footer que aparecen en todas las vistas (salvo en notfound) y tres tarjetas:
    ***NewPost***, que es una tarjeta con inputs para los campos de una entrada nueva; 
    ***Post***, que es la entrada con el texto completo;
    ***Postcard***, que es una versión reducida de una entrada.
  - **pages**: aquí importo los componentes de la carpeta components que necesite y estructuro todo para que sea responsivo.
3. App.css
4. App.js: App.css y bootstrap se importan aquí. En este archivo están las rutas del blog como son /, /new, /post/:id,¡ y * (notfound).
5. index.js: renderiza App.js

## Cómo he trabajado y dificultades que he encontrado

Como he comentado ya, empecé con los componentes más sencillos, los que no tenían solicitudes HTTP, para seguir con los que sí. Siempre hay iteraciones y he vuelto sobre todos los componentes y páginas/vistas para ir añadiendo funcionalidades y cambiando detalles para ajustarme a las instrucciones. Por ejemplo, inicialmente había puesto un botón para ver una entrada completa en vez de hacer la navegación desde la imagen y el título, como se pedía.

También quiero comentar que a veces la idea inicial deja de estar clara según se avanza. Cuando empecé a crear los componentes decidí hablar con una compañera sobre las carpetas components y pages porque estaba dudando sobre la división que había hecho. Esta conversación me ayudó a establecer la estructura definitiva y a tomar una decisión mucho más rápida que si empezaba a dudar y no le exponía mi idea a nadie.

Por otro lado quiero comentar que la mayor dificultad la encontré con las imágenes. Leí documentación sobre la carpeta public, busqué tutoriales, consulté código en Stack Overflow, hablé mucho con chatGPT. También busqué ayuda fuera de Internet cuando conseguí que las rutas de las imágenes se almacenaran en base de datos pero no era capaz de mostrarlas en el blog. Borrar las imágenes de la carpeta public también fue un desafío, por eso quiero poner aquí el controller que borra la entrada:

```
export const deletePost = async (req, res) => {
  try {
    const postData = req.body;
    console.log(postData);
    const id = req.params.id;
    const query = "DELETE FROM posts WHERE id = " + id;
    const [rows] = await pool.query(query);
    const imagePath = "../frontend/public" + postData.postObject.picture;
    fs.unlinkSync(imagePath);
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while deleting post." });
  }
};
```

Es la primera vez que hago una memoria explicativa, pero no he querido ser solo descriptiva por eso de que el camino es importante, de ahí que haya reflexionado a lo largo de este README.

Muchas gracias por llegar hasta aquí, Gaizka.






