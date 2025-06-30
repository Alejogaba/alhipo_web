# Despliegue de Alhipo Web con Docker

Este proyecto contiene una página web estática para la aplicación Alhipo, configurada para ser desplegada usando Docker y Coolify.

## Características del Dockerfile

- **Imagen base**: `nginx:alpine` (ligera y eficiente)
- **Servidor web**: Nginx optimizado para archivos estáticos
- **Puerto**: 80
- **Manejo de errores 404**: Redirige automáticamente a la página principal
- **Optimizaciones incluidas**:
  - Compresión gzip
  - Cache de archivos estáticos (1 año)
  - Cache de archivos HTML (1 hora)
  - Headers de seguridad
  - Configuración optimizada para Coolify

## Archivos incluidos

- `Dockerfile`: Configuración simple y limpia del contenedor
- `nginx.conf`: Configuración personalizada de Nginx
- `.dockerignore`: Excluye archivos innecesarios del build
- Archivos de Firebase excluidos (ya no se usan)
- Carpeta `public/` de Firebase excluida del build

## Despliegue en Coolify

### Opción 1: Desde repositorio Git
1. Conecta tu repositorio Git en Coolify
2. Coolify detectará automáticamente el Dockerfile
3. Configura el puerto 80 en la configuración del servicio
4. Despliega

### Opción 2: Build manual
```bash
# Construir la imagen
docker build -t alhipo-web .

# Ejecutar localmente para probar
docker run -p 8080:80 alhipo-web
```

## Configuración en Coolify

- **Puerto del contenedor**: 80
- **Tipo de aplicación**: Docker
- **Build context**: Raíz del proyecto
- **Dockerfile**: `./Dockerfile`

## Características técnicas

### Nginx Configuration
- Servidor optimizado para archivos estáticos
- Compresión gzip habilitada
- Headers de seguridad configurados
- Manejo inteligente de errores 404

### Archivos excluidos del build
- Configuraciones de Firebase
- Archivos de Git
- Documentación
- Archivos temporales
- Carpeta `public/` (duplicada)

## Verificación del despliegue

Una vez desplegado, la aplicación estará disponible en la URL proporcionada por Coolify. Todas las rutas no encontradas (404) redirigirán automáticamente a la página principal.

## Notas importantes

- Los archivos de Firebase han sido excluidos del contenedor
- La configuración está optimizada para producción
- El contenedor es ligero y eficiente
- Compatible con Coolify y otros servicios de contenedores
