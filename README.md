# Tarea de Formación Complementaria 2025

## 📋 Requisitos Previos

Antes de comenzar con la instalación, es necesario verificar que el sistema cuente con las siguientes herramientas instaladas:

- **Node.js** - versión 16 o superior (entorno de ejecución de JavaScript)
- **npm** - gestor de paquetes oficial de Node.js
- **Express** - framework web para aplicaciones Node.js
- **PostgreSQL** - sistema de gestión de bases de datos relacional

## ⚙️ Procedimiento de Instalación

### Paso 1: Descargar el Código Fuente
Ejecuta los siguientes comandos en tu terminal para obtener el proyecto:
```bash
git clone url_del_repositorio
cd carpeta_del_clone
```

### Paso 2: Instalación de Dependencias
Una vez descargado el proyecto, instala todas las dependencias necesarias:
```bash
npm install
```

## 🔧 Configuración del Entorno

### Preparación del Archivo de Configuración

Sigue estos pasos para configurar correctamente las variables de entorno:

1. Ubica el archivo `.env.example` en el directorio principal del proyecto
2. Cambia el nombre del archivo a `.env`
3. Edita el archivo y configura las siguientes variables:

**Estructura básica del archivo .env:**
```bash
# Define el puerto donde se ejecutará la aplicación
API_PORT=

# Cadena de conexión para la base de datos

# Ejemplo postgresql://usuario_db:clave_segura@localhost:5432/mi_base_datos
DATABASE_URL="proveedor://usuario:contraseña@host:puerto/nombre_bd"
```

### Especificaciones de Configuración

**API_PORT**
- Establece el número de puerto donde el servidor estará escuchando
- Valores comunes: 3000, 3785, 5000, 8080

**DATABASE_URL** - Componentes de la cadena de conexión:
- `proveedor`: Tipo de base de datos (para este proyecto se utiliza postgresql)
- `usuario`: Nombre de usuario autorizado para la base de datos
- `contraseña`: Contraseña de autenticación del usuario
- `host`: Dirección IP o nombre del servidor de base de datos
- `puerto`: Puerto de conexión al servicio de base de datos
- `nombre_bd`: Nombre específico de la base de datos a utilizar

## 🗄️ Configuración de la Base de Datos

### Inicialización con Prisma ORM

Después de configurar las variables de entorno, procede con la configuración de la base de datos ejecutando estos comandos en orden:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 🚀 Ejecución de la Aplicación

Para iniciar el servidor en modo desarrollo utiliza el siguiente comando:

```bash
npm run start:dev
```

## 🏗️ Arquitectura del Sistema

### Diagrama de Componentes

La aplicación sigue una arquitectura por capas que puedes visualizar en el siguiente diagrama:

![Diagrama de Capas](/Capas.drawio.png)

## ✨ Características y Funcionalidades

### 📊 Administración de Módulos
- API RESTful completa para la gestión de todos los recursos del sistema
- Arquitectura modular diseñada para facilitar el mantenimiento y escalabilidad

### 🔄 Operaciones Disponibles por Módulo
Cada módulo del sistema implementa las siguientes operaciones básicas:

1. **Crear** - Permite agregar nuevos registros al sistema
2. **Leer** - Facilita la consulta de registros individuales y listados completos
3. **Actualizar** - Permite modificar la información de registros existentes
4. **Eliminar** - Implementa borrado lógico para mantener la integridad de los datos

### 🛡️ Mecanismos de Validación y Seguridad
- Validación en tiempo real de todos los datos ingresados al sistema
- Verificación de la existencia de registros relacionados antes de operaciones críticas
- Control de duplicados en campos designados como únicos
- Gestión segura de estados de activación e inactivación de registros

### 🔗 Gestión de Relaciones entre Módulos
- Administración completa de las conexiones y dependencias entre diferentes módulos
- Garantía de integridad referencial en todas las operaciones de base de datos
- Validaciones cruzadas que aseguran la consistencia de la información entre módulos interconectados
