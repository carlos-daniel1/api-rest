### Instruções para Configurar e Executar o Servidor Express

1. **Instalar Dependências**  
   Abra a pasta `backEnd` pelo terminal e execute o comando abaixo para instalar as dependências necessárias:

   ```bash
   npm install
   ```

2. **Iniciar o Servidor**  
   Para iniciar o servidor, utilize o seguinte comando:

   ```bash
   npm start
   ```

3. **Acessar a Aplicação**  
    Utilize a URL abaixo para acessar o servidor:
   - [http://localhost:3000](http://localhost:3000)

### Importante ⚠️

Para utilizar as rotas da api, você deve fazer o **login**, pegar o **token** e utilizar ele no **header
authorization** em cada requisição, é necessário ter um usuário já cadastrado.

Para fazer o login use:

*URL:* **http://localhost:3000/api/user/login**

**body:**

```json
{
  "email": "usuario@gmail.com",
  "password": "123"
}
```

## 🛡️ Endpoints da API

A API está pronta para gerenciar **produtos** e **usuários** de forma eficiente.  
Confira os endpoints disponíveis:

### 📦 **/api/product**

- **GET** `/api/product`  
  Lista todos os produtos disponíveis.

- **POST** `/api/product`  
  Adiciona um novo produto à loja.

  - **Body Exemplo**:
    ```json
    {
      "name": "Maçã",
      "image": "link image",
      "price": 5.99,
      "description": "Maçã vermelha, fresca e deliciosa.",
      "discounted": 0
    }
    ```

- **GET** `/api/product/:id`  
  Retorna as informações de um produto específico pelo ID.

- **PUT** `/api/product/:id`  
  Atualiza as informações de um produto pelo ID.

  - **Body Exemplo**:
    ```json
    {
      "name": "fruta atualizada",
      "image": "link image",
      "price": 5.99,
      "description": "fruta atualizada",
      "discounted": 0
    }
    ```

- **DELETE** `/api/product/:id`  
  Remove um produto pelo ID.

---

### 👤 **/api/user**

- **GET** `/api/user`  
  Lista todos os usuários cadastrados.

- **POST** `/api/user`  
  Cadastra um novo usuário.

  - **Body Exemplo**:
    ```json
    {
      "name": "teste",
      "cpf": 12345670,
      "email": "teste@gmail.com",
      "adm": true,
      "password": "teste",
      "image": "link image"
    }
    ```

- **GET** `/api/user/:id`  
  Retorna as informações de um usuário específico pelo ID.

- **PUT** `/api/user/:id`  discounted
  Atualiza as informações de um usuário pelo ID.

  - **Body Exemplo**:
    ```json
    {
      "name": "novo nome",
      "cpf": 12345670,
      "email": "1@gmail.com",
      "adm": true,
      "password": "teste",
      "image": "link imagem"
    }
    ```

- **DELETE** `/api/user/:id`  
  Remove um usuário pelo ID.

## 🚨 Observações

- Todos os endpoints utilizam **JSON** para envio e recebimento de dados.
- Certifique-se de passar um token de autenticação (caso tenha implementado segurança) no cabeçalho:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```


