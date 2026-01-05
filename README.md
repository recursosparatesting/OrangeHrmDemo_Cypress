# 📋 Prueba UI al sitio Orange HRM Demo con Cypress
La ATM de este repositorio realizar una prueba de login al sitio Orange HRM Demo.    
Esta ATM fue desarrollada en Cypress utilizando la tipica separacion de capas del Patron de diseño POM.     
la ATM permite ingresar los valores de usuario y contraseña mediante variables. Esto se indica en las instrucciones de Pipeline.



## 📋 Requisitos
* node.js    
* NPM (el cual deberia instalarse con node.js)     


## Pipeline en Github Actions.   
Para el despliegue en github Actions, aprovechamos Action oficial de Cypress lo cual realiza las siguientes tareas:      

Detectar el entorno: Revisa si ya hay una versión de Node.js en la máquina virtual de GitHub (que por defecto ya trae una instalada).     

Instalación Inteligente: Ejecuta npm install o npm ci automáticamente.   

Gestión de Caché: La Action guarda en la memoria de GitHub las carpetas pesadas (como node_modules y el binario de Cypress). En cada ejecución, en lugar de descargar todo de internet, lo recupera de la caché, ahorrando minutos de espera.    

El pipeline se ejecuta cuando se realiza un push y en este caso toma las variables por defecto:    
usuario: Admin   
contraseña: admin123    

El pipeline tambien se puede ejecutar a peticion, llendo a Actions - Pruebas Orange HRMDemo con Cypress  -- Run workflow.    Alli se pueden cambiar estos valores para realizar pruebas negativas.



## 📋 Descarga y ejecución de la ATM en local      

El robot tambien puede usarse de manera local: se puede clonar el repositorio y ejecutar la prueba de la siguiente manera:    
git clone https://github.com/recursosparatesting/OrangeHrmDemo_Cypress.git      

Una vez en la carpeta del proyecto clonado, ejecuta los siguientes comandos:    

npm install     
npx cypress run --env USER_NAME=prueba,USER_PASS=prueba    

donde USER_NAME es el usuario y USER_PASS es la contraseña que el robot utilizara para ejecutar la prueba.   

Tener en cuenta: En la maquina donde se esta clonando el repositorio, debe estar instalado Node.js y NPM.    