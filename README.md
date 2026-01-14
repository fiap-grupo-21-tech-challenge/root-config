Esse é o repositório raiz do Tech Challange 2 da Pós Graduação da FIAP.

Passo a passo para executar localmente:

**Passo 1:**
- Crie um novo diretório chamado tech-challange

**Passo 2:**
- Dentro do novo diretório, clone os repositórios presentes nesse link: https://github.com/orgs/fiap-grupo-21-tech-challenge/repositories

Exemplo:
```bash
git clone https://github.com/fiap-grupo-21-tech-challenge/root-config.git
```

**Passo 3:**
- Após ter todos os diretórios instalados, para cada um deles, acesse seu diretório, exemplo root-config, e execute o comando npm run start --port [numero da porta], na seguinte ordem:

```bash
  # root-config
    npm run start --port 9000

  # shared-react
    npm run start --port 8080
  
  # navbar
    npm run start --port 8081
  
  # landing-page
    npm run start --port 8082
  
  # sign-in
    npm run start --port 8083
  
  # sign-up
    npm run start --port 8084
  
  # balance
    npm run start --port 8085
```

**Passo 4:**
- Acesse http://localhost:9000/ e a landing page deve aparecer.
