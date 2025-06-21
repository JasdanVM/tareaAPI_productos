# tareaAPI_productos
API RESTful que utiliza Node.js y Express, para gestionar un listado de productos en un .json

Tarea de Jason Daniel Velásquez Mejía - 20212000937  
Para la clase de Diseño Digital, sección 1700, Ing. Juan Enrique Alvarenga Rodas

# API de Gestión de Productos

## Instalación de dependencias

Clona el repositorio y accede al directorio del proyecto:

`git clone https://github.com/JasdanVM/tareaAPI_productos.git`

`cd tareaapi`

Instala las dependencias ejecutando:

`npm install`
`npm install express`

## Ejecución de la API

En el directorio del proyecto se puede utilizar los comandos de terminal
- `npm start`
- `node index.js`

La API estará disponible en:
http://localhost:5000


## Rutas disponibles

- `GET .../productos/`  
  Muestra todos los productos.

- `GET .../productos/:id`  
  Retorna un producto específico por su ID.

- `POST .../productos/`  
  Crea un nuevo producto con los datos enviados en el cuerpo de la solicitud.
  Se genera un ID único tras revisar la lista de productos existentes, y la fecha se asigna automáticamente.

- `PUT .../productos/:id`  
  Actualiza los datos de un producto existente a partir de su ID.

- `DELETE .../productos/:id`  
  Elimina un producto en base al ID dado.

> `GET .../productos/disponibles`  
 Muestra todos los productos que han sido marcados como Disponibles.
 También especifica el número de productos disponibles.
>  `GET .../productos/search`  
  Busca productos según parámetros de búsqueda en la URL (`?nombre=...`,`?precio=...`).

Al crear o actualizar un oroducto se hacen las siguientes validaciones:
- Debe tener las propiedades de nombre, precio, y descripción
- El precio debe ser un número mayor a 0
- La descripción tendrá un mínimo de 10 carácteres permitidos
