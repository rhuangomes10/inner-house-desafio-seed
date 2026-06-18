# Inner House

O Blog foi construído utilizando HTML, CSS e JavaScript, tendo como os principais métodos HTTP:

- **Listagem de posts (GET):** ao carregar a página, os posts são buscados na API e renderizados dinamicamente na tela.
- **Criação de posts (POST):** um formulário envia título, conteúdo e autor para a API, e a lista é atualizada automaticamente após o envio.
- **Exclusão de posts (DELETE):** cada post exibido possui um botão de exclusão que remove o post correspondente via API, atualizando a lista em seguida.




## Endpoints usados

#### Buscar todos os Posts

```http
  GET /api/posts
```

| Parâmetro | Tipo     | Descrição                  |
| :-------- | :------- | :-------------------------- |
| `api_key` | `string` | **Requisito**. Sua API key |

#### Criar um Post

```http
  POST /api/posts
```

| Parâmetro | Tipo     | Descrição                  |
| :-------- | :------- | :-------------------------- |
| `api_key` | `string` | **Requisito**. Sua API key |
| `title`   | `string` | **Requisito**. Título do post |
| `content` | `string` | **Requisito**. Conteúdo do post |
| `author`  | `string` | **Requisito**. Autor do post |

#### Deletar um Post

```http
  DELETE /api/posts/{id}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Requisito**. ID do post a ser deletado |




## Links:


- [Site]()
- [Prototipo]()

## Authors

- [@rhuangomes10](https://www.github.com/rhuangomes10)
- [@yrimarinho](https://github.com/yrimarinho)
- [@PesoLucas](https://github.com/PesoLucas)
