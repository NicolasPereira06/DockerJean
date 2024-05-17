# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Instalar o servidor estático para servir a aplicação
RUN npm install -g serve

# Expor a porta que a aplicação escuta
EXPOSE 3000

# Definir o comando para rodar a aplicação
CMD ["serve", "-s", "build"]
