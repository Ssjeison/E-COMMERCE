# Ecommerce MERN

Este es un proyecto de e-commerce desarrollado con el stack MERN (MongoDB, Express, React, Node.js). Su propósito es proporcionar una plataforma completa para la compra y venta de productos en línea. Incluye una interfaz de usuario amigable, un backend robusto, y una base de datos para gestionar productos, usuarios y pedidos.

---

## Características

- **Frontend:** React con diseño responsivo y llamadas a la API.
- **Backend:** Node.js con Express para crear una API RESTful.
- **Base de datos:**
    - MongoDB para almacenar usuarios, productos y pedidos.
    - PostreSQL para almacenar usuarios
- **Autenticación:** Uso de JWT (JSON Web Tokens) para el inicio de sesión seguro.
- **Funciones principales:**
  - Gestión de usuarios (registro, inicio de sesión).
  - Listado y detalles de productos.
  - Carrito de compras.
  - Procesamiento de pedidos.

---

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 14 o superior): [Descargar aquí](https://nodejs.org/)
- **MongoDB**: [Guía de instalación](https://www.mongodb.com/docs/manual/installation/)
- **Git**: [Guía de instalación](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

## Instalación y configuración

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Ssjeison/ecommerce.git
   cd ecommerce

2. Instala las dependencias para el back y front:
npm install express nodemon mongoose dotenv cors bcryptjs express pg
    - bcryptjs
    - cors
    - dotenv
    - express
    - jsonwebtoken
    - mongoose
    - nodemon
    - pg
  
Front
npm install axios react-router-dom npm i @material-tailwind/react

    - axios
    - npm
    - react
    - tailwind
    - fortawesome
    
3. Inicia el servidor en back con el comando
   -- npx nodemon servidor.js

4. Inicia el programa en front con el comando
   -- npm start

5. Las contribuciones son bienvenidas. Si quieres contribuir, sigue estos pasos:
    
    1. Crea una nueva rama:
        -- git checkout -b nueva-funcionalidad
    2. Realiza tus cambios y haz un commit:
        -- git commit -m "Añade nueva funcionalidad"
    3. Sube los cambios:
        -- git push origin nueva-funcionalidad
    4. Abre un Pull Request en el repositorio principal.

