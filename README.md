

Qual é o seu desafio?

    Você deve criar uma API para gerenciar users do Github.

    Tecnologias: Node.js + framework, caso julgue necessário (Express ou Adonis) + banco de dados (MongoDB ou Firestore/Firebase ou  PostgreSQL ou MySQL).

    Outras bibliotecas, arquiteturas e etc, ficam à sua escolha.

    P.S: O desenvolvimento do front-end não é obrigatório, pois usaremos o Insomnia para testar sua aplicação.



Requisitos:

    Usuário se cadastra fornecendo e-mail, senha e cpf;

    No cadastro, ele define se é um usuário COMUM ou ADMIN;

    O usuário faz login fornecendo e-mail e senha;

    Todos os dados, tanto de cadastro como de login, precisam ser validados; 

      Quando falo validação, entenda:

        Cadastro: Senha com 6 dígitos ou mais + e-mail válido + CPF com números somente (11 dígitos);
        Login: Senha com 6 dígitos ou mais + e-mail válido;



O USUÁRIO ADMIN, vai:

    Pesquisar por users no github, utilizando a api pública do mesmo(https://api.github.com/users/);

    Adicionar no banco de dados os users(github) que desejar, para que eles fiquem disponíveis para todos os USUÁRIOS COMUNS;

    Salvar no banco de dados apenas as informações: login, nome, bio, localidade e html_url.



O USUÁRIO COMUM, vai:

    Visualizar uma listagem com todos os users(github) disponibilizados pelo admin;

    Criar, editar e excluir listas para organizar os users(github);

    Cada lista precisa ter um nome, que será escolhido pelo USUÁRIO COMUM;

    Adicionar os users(github) disponíveis nas suas listas;

    Um user(github) pode estar disponível em mais de uma pasta;

    Adicionar tags aos users(github) que estão dentro das listas;

    Exemplos de tags: Full-stack, Back-end, Front-end;

    Qualquer funcionalidade além das que citamos anteriormente é muito bem-vinda.





