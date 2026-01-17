FROM node:20-alpine

# Instala o servidor e as dependências de build
RUN npm install -g serve

WORKDIR /app

# Copia os arquivos de configuração primeiro (otimiza cache)
COPY package*.json ./
RUN npm install

# Copia o resto do código e gera o build
COPY . .
RUN npm run build

# O Webpack vai gerar uma pasta chamada 'dist'
# Vamos servir o que estiver dentro dela na porta 9000
EXPOSE 9000
CMD ["serve", "-s", "dist", "-l", "9000"]