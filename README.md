Creación de las carpetas backend y frontend dentro del mismo repositorio.

Instalación de Node.JS, React y librerías necesarias:
- Backend: ``npm init -y``, ``npm i express dotenv date-fns esm mysql2``(express, variables de entorno, librería específica para fechas de los posts y controlador de Node.js para interactuar con bases de datos MySQL), ``npm install -g nodemon``, ``npm i nodemon`` (para actualización automática cuando haya modificaciones en rutas y controladores del backend)
- Frontend: ``npx create-react-app .``, ``npm install react-bootstrap@next bootstrap@5.3.0``(react-bootstrap y bootstrap 5), ``npm i react-router-dom``

EN BACKEND: creación de carpetas:
1. Carpeta llamada database, que contiene el script SQL que permite la creación de la base de datos, de la tabla posts y de los inserts correspondientes para que se muestren en el feed.
2. Carpeta src con tres carpetas y dos archivos:
    a. controllers
    b. routes
    c. env, incluyendo el archivo con las variables de entorno necesarias
    d. app.js, donde irán enrutados los futuros endpoints
    e. db.js, para conectar con la base de datos
3. En el package.json le indico cómo quiero que inicie el proyecto añadiendo a los scripts:
```
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
```
Se utiliza "start" para iniciar el servidor en entorno de producción con `npm start` y "dev" para iniciar el servidor en un entorno de desarrollo con `npm run dev`. 