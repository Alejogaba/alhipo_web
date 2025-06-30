# Usar una imagen base de Nginx ligera
FROM nginx:alpine

# Copiar todos los archivos de la página web al directorio de Nginx
COPY . /usr/share/nginx/html/

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
