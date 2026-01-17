# Use uma imagem Node.js como base
FROM node:lts-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho
COPY package.json package-lock.json ./
# Ou: COPY package.json yarn.lock ./

# Instala as dependências do projeto
RUN npm install
# Ou: RUN yarn install

# Copia o restante do código fonte
COPY . .

# Expõe a porta que o servidor de desenvolvimento do root config usa (geralmente 9000)
EXPOSE 9000

# Comando para iniciar o servidor de desenvolvimento
# O --host 0.0.0.0 é crucial para que o servidor seja acessível de fora do container
CMD ["npm", "start"]
# Ou: CMD ["yarn", "start"]
