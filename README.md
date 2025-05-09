# Teste para vaga de React Developer Junior

O objetivo deste teste é entender o candidato, sua experiência e sua capacidade de resolução de problemas com dúvidas e detalhes que serão exigidos no dia-a-dia como React Developer Junior. O teste é baseado em questionamentos e problemas a serem resolvidos.

## Como será feito o teste?

O teste é dividido em 2 etapas:

Questões teóricas.

Projeto prático, quer seja correção de bug ou criação do mesmo.
O candidato precisa criar um repositório próprio com a seguinte estrutura:

No README serão respondidas as questões teóricas (pergunta e resposta), de forma organizada e explicada.
No próprio repositório estará o projeto prático, corrigido e/ou criado.
Após a finalização, o candidato deve enviar um e-mail para <suporte@b7web.com.br> com o link do repositório original (este) bem como o link do repositório pessoal com a resolução.

### Questões Teóricas

1. O que é autocomplete, autofocus e required nos campos de input?

   _Autocomplete: é usado para fornecer sugestões de preenchimento automático para campos de entrada, com base em dados previamente inseridos pelo usuário ou em dados coletados em outros formulários ou sistemas. Isso pode ajudar a melhorar a experiência do usuário e reduzir erros de digitação._

    _Autofocus: é usado para definir o foco inicial em um campo de entrada quando a página é carregada, o que pode ajudar a melhorar a usabilidade e a eficiência para o usuário._

    _Required: é usado para tornar um campo de entrada obrigatório, impedindo que o formulário seja enviado até que o usuário preencha o campo._

2. Qual keyCode do botão ENTER no evento de teclado?

   _13_

3. Qual a lógica no React para, enquanto estiver carregando algo, bloquear alterações em campos?

    _Em React, é possível bloquear alterações em campos enquanto algo está sendo carregado usando uma combinação de estado e condicionais. Por exemplo, você pode usar um estado para rastrear se algo está carregando e, em seguida, condicionar a renderização do campo de entrada com base nesse estado._

4. Para integração com Github, o que é necessário?

    _Para integração com o Github, é necessário criar uma conta no Github e obter uma chave de acesso pessoal (personal access token) que permitirá ao seu aplicativo se comunicar com a API do Github. Com a chave de acesso, é possível fazer solicitações (requests) de dados do Github por meio da API, como por exemplo, listar repositórios, buscar usuários, etc._

### Projeto prático

Crie um sistema de busca capaz de pesquisar usuários de GITHUB e exibir as informações (e avatar) do perfil pesquisado.

Essa aplicação deve:

Ter um campo principal de busca, com autofocus, em que é digitado o nome do usuário a procurar.
Ao dar ENTER ou apertar no botão de busca, deve exibir um loading e bloquear o campo de busca.
O resultado deve ser exibido abaixo do campo de busca.
O design não é fator importante, contudo, a estruturação da página sim será levada em consideração.
