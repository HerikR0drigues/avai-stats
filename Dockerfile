# Usa uma imagem base com Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo package.json e package-lock.json
COPY backend/package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do backend
COPY backend/ .

# Expõe a porta do servidor (substitua pela porta correta se necessário)
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "start"]
