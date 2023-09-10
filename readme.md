# Proyecto con Node.js, Express, TypeScript y Arquitectura Hexagonal

Este repositorio contiene un proyecto de ejemplo que utiliza Node.js, Express, TypeScript y sigue una arquitectura hexagonal (también conocida como arquitectura de puertos y adaptadores).

## Descripción

Este proyecto muestra una estructura de código que facilita la separación de preocupaciones y la modularidad en una aplicación Node.js. La arquitectura hexagonal se utiliza para aislar la lógica de negocio del resto de la aplicación y permitir la fácil adaptación a diferentes interfaces y fuentes de datos.

## Estructura de Carpetas

La estructura de carpetas del proyecto sigue el patrón de arquitectura hexagonal:

-   `src/modules/project/application/`: Contiene los casos de uso de la aplicación.
-   `src/modules/project/domain/`: Define los modelos y repositorios de dominio.
-   `src/modules/project/interfaces/`: Contiene los controladores y adaptadores para la interfaz de usuario y la base de datos.
-   `src/modules/common/database/`:Conexión a la base de datos.
-   `src/index.ts`: El punto de entrada principal de la aplicación.

## Configuración

Para ejecutar este proyecto, asegúrate de tener Node.js y TypeScript instalados en tu sistema.

1. Clona este repositorio en tu máquina local:
   git clone https://github.com/ATGeneracion1/workbook-back.git
2. Navega al directorio del proyecto:
   cd tu-proyecto
3. Instala las dependencias:
   npm install
4. Configura las varibles en entorno `.env`:
   -   PORT =
   -   SERVER_NODE =
   -   MY_USER =
   -   MY_PASSWORD =
   -   SECRETORPRIVATEKEY =
5. Inicia la aplicación:
   npm start
   o
   npm run dev

La aplicación estará disponible en [http://localhost:9090](http://localhost:9090).

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).