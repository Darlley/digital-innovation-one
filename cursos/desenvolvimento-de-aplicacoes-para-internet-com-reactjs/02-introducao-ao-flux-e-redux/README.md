Flux é uma arquitetura de comunicação entre componentes que o Facebook desenvolveu para resolver os problemas de notificações não sincronizadas de seu app.

Esta arquitetura é um padrão de tráfego de dados (unidirecioonal):

1. Action -> ação do usuário
2. Dispatcher -> um atendente que despacha as callbacks para suas respectivas Stores
3. Store -> um controlador que armazena as informações e altera os estados
4. View -> um midddleware intermediário que recebe as atualizações da Store e repassa para visualização

Um Flux pode ser implementado de difversas formas, mas algumas das mais conhecidas são?:

- Redux
- Reflux
- Mobx
- Vuex (baseado em Redux e Elm)
- NgRx (baseado em Redux RxJS)

Estas implementações são utilizadas para melhorar a comunicação (troca de informações via props) entre componentes e centralizam a informação com a Store.

## Redux

As etapas do Redux são:

![redux](https://krasimirtsonev.com/blog/article/my-take-on-redux-architecture/assets/redux-architecture.jpg)

Como não existe um Dispatcher no Redux a Action apenas retorna um objeto de action, e doferente do flux que existem diversas Stores em Redux existe apenas uma única, esta única Store cuida de todos os estados mas é os Reducer que descobre qual destes estados mudam. Na camada de view o Redux divide em 3 conceitos:

1. Provider: componentes 
2. connect(): função para coneção de estados
3. selector: quais estados é repassado para props