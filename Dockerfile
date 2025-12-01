FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package files E patches
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Instalar pnpm e dependências
RUN npm install -g pnpm@10.4.1 && \
    pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm build

# Stage de produção
FROM node:20-alpine

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm@10.4.1

# Copiar package files E patches
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Instalar apenas dependências de produção
RUN pnpm install --prod --frozen-lockfile

# Copiar build e servidor
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env.example ./.env.example

# Expor porta
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (r) => { process.exit(r.statusCode === 200 ? 0 : 1); })"

# Comando de inicialização
CMD ["node", "dist/secure-server.js"]
