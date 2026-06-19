// ===== Configuração da API =====
const API_URL = 'https://blog-api.seedabit.org.br/api/posts';

// Função para buscar posts
async function getPosts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const posts = await response.json();
        console.log('Posts recebidos:', posts);

				// Exibir os posts na página
				displayPosts(posts);

        return posts;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        alert('Erro ao carregar posts. Tente novamente.');
    }
}


// Função para exibir os posts
function displayPosts(posts) {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="author">Por: ${post.author}</p>
            <p class="content">${post.content}</p>
            <p class="date">${new Date(post.createdAt).toLocaleDateString('pt-BR')}</p>
            <button class="btn-delete" onclick='deletePost(${JSON.stringify(post.id)})'>🗑️ Deletar</button>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Chamar a função quando a página carregar
getPosts();

// Função para criar um novo post
async function createPost(title, content, author) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
            body: JSON.stringify({
                title: title,
                content: content,
                author: author
            })
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const newPost = await response.json();
        console.log('Post criado com sucesso:', newPost);

				// Atualizar a lista de posts
				getPosts();

        return newPost;
    } catch (error) {
        console.error('Erro ao criar post:', error);
        alert('Erro ao criar post. Verifique os dados e tente novamente.');
    }
}

// Exemplo de uso com formulário
const form = document.getElementById('post-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

		// Validação básica
		if (!title || !content || !author) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

// Criar o post
await createPost(title, content, author);
		// Limpar formulário
    form.reset();
});

// Função para deletar um post
async function deletePost(postId) {
    const confirmar = confirm('Tem certeza que deseja deletar este post?');
    if (!confirmar) return;

    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': API_KEY,
                'accept': '*/*'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        console.log('Post deletado com sucesso!');
        alert('Post deletado com sucesso!');

			// Atualizar a lista de posts
			getPosts();

    } catch (error) {
        console.error('Erro ao deletar post:', error);
        alert('Erro ao deletar post. Tente novamente.');
    }
}
