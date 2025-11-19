# Guia de Deploy - sp.borusa.com.br

Este documento contém instruções para fazer deploy da aplicação no subdomínio `sp.borusa.com.br`.

## 📋 Pré-requisitos

- Servidor VPS com Ubuntu (ou similar)
- Node.js 18+ instalado
- Nginx instalado
- Domínio `borusa.com.br` configurado

## 🚀 Opção 1: Deploy Manual na VPS

### 1. Conectar ao Servidor

```bash
ssh usuario@seu-servidor-ip
```

### 2. Instalar Dependências

```bash
# Instalar Node.js (se não tiver)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar pnpm
npm install -g pnpm

# Instalar Nginx (se não tiver)
sudo apt update
sudo apt install nginx
```

### 3. Clonar Repositório

```bash
cd /var/www
sudo git clone https://github.com/Elmoamacoca/borusa-sales-presentations.git
cd borusa-sales-presentations
```

### 4. Instalar e Buildar

```bash
pnpm install
pnpm build
```

### 5. Configurar Nginx

Criar arquivo de configuração:

```bash
sudo nano /etc/nginx/sites-available/sp.borusa.com.br
```

Adicionar configuração:

```nginx
server {
    listen 80;
    server_name sp.borusa.com.br;

    root /var/www/borusa-sales-presentations/client/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 6. Ativar Site

```bash
sudo ln -s /etc/nginx/sites-available/sp.borusa.com.br /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Configurar DNS

No painel do seu provedor de domínio (ex: Registro.br, GoDaddy, Cloudflare):

- Tipo: `A`
- Nome: `sp`
- Valor: `IP-DO-SEU-SERVIDOR`
- TTL: `3600`

### 8. Configurar SSL (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d sp.borusa.com.br
```

## 🌐 Opção 2: Deploy na Vercel (Mais Fácil)

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Fazer Deploy

```bash
cd /caminho/para/borusa-sales-presentations
vercel --prod
```

### 3. Configurar Domínio Customizado

No dashboard da Vercel:
1. Vá em Settings → Domains
2. Adicione `sp.borusa.com.br`
3. Configure o DNS conforme instruções da Vercel

## 🔄 Atualizar Aplicação

### Deploy Manual (VPS)

```bash
cd /var/www/borusa-sales-presentations
sudo git pull
pnpm install
pnpm build
sudo systemctl reload nginx
```

### Deploy Vercel

```bash
cd /caminho/para/borusa-sales-presentations
git pull
vercel --prod
```

## 🔐 Segurança

### Alterar Credenciais Padrão

Antes do deploy em produção, altere as credenciais em:

**Dashboard:** `client/src/hooks/useDashboardAuth.ts`
```typescript
const DASHBOARD_USERNAME = 'seu-usuario-seguro';
const DASHBOARD_PASSWORD = 'sua-senha-forte-aqui';
```

**Apresentações:** `client/src/config/presentations.config.ts`
```typescript
password: 'senha-forte-unica'
```

### Recomendações

- Use senhas fortes (mínimo 12 caracteres)
- Troque as slugs aleatórias regularmente
- Monitore logs de acesso
- Configure firewall (UFW) na VPS

## 📊 Monitoramento

### Logs Nginx (VPS)

```bash
# Logs de acesso
sudo tail -f /var/log/nginx/access.log

# Logs de erro
sudo tail -f /var/log/nginx/error.log
```

### Analytics

A aplicação já está configurada com analytics (variável `VITE_ANALYTICS_ENDPOINT`).

## 🆘 Troubleshooting

### Erro 404 nas rotas

Certifique-se que o Nginx está configurado com `try_files $uri $uri/ /index.html;`

### Aplicação não carrega

1. Verifique se o build foi feito: `ls client/dist`
2. Verifique permissões: `sudo chown -R www-data:www-data /var/www/borusa-sales-presentations`
3. Verifique logs do Nginx

### SSL não funciona

```bash
sudo certbot renew --dry-run
sudo systemctl status certbot.timer
```

---

**Suporte:** Para dúvidas, consulte o README.md ou abra uma issue no repositório.
