# 📋 Prueba UI al sitio Orange HRM Demo con Cypress
La ATM de este repositorio realizar una prueba de login al sitio Orange HRM Demo.    
Esta ATM fue desarrollada utilizando Cypress utilizando la tipica separacion de capas del Patron de diseño POM.     



## 📋 Requisitos
* node.js    
* NPM (el cual deberia instalarse con node.js)     


## Pipeline en Github Actions.   
Para el despliegue en github Actions, aprovechamos Action oficial de Cypress lo cual realiza las siguientes tareas:      

Detectar el entorno: Revisa si ya hay una versión de Node.js en la máquina virtual de GitHub (que por defecto ya trae una instalada).     

Instalación Inteligente: Ejecuta npm install o npm ci automáticamente.   

Gestión de Caché: La Action guarda en la memoria de GitHub las carpetas pesadas (como node_modules y el binario de Cypress). En cada ejecución, en lugar de descargar todo de internet, lo recupera de la caché, ahorrando minutos de espera.    


## 📋 Descarga y ejecución de la ATM en local      

El robot tambien puede usarse de manera local: se puede clonar el repositorio y ejecutar la prueba de la siguiente manera:    
git clone https://github.com/recursosparatesting/OrangeHrmDemo_Cypress.git      

Una vez en la carpeta del proyecto clonado, ejecuta los siguientes comandos:    

npm install     
npm run test:chrome      

Tener en cuenta: En la maquina donde se esta clonando el repositorio, debe estar instalado Node.js y NPM.    