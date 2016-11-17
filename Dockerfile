# Dockerfile

# Informando a imagem base
FROM mhart/alpine-node

# Definindo o diretório padrão
WORKDIR /home

# Porta 3000 para servidor web
# Porta 35729 para livereload
EXPOSE 3000 35729

# Iniciando o projeto
CMD ["npm", "start"]
