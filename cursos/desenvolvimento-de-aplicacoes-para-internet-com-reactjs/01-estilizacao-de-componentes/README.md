## 2 - Formas de estilizar componentes

1. Inline
2. Classes
3. CSS in JS

1 - Para criar estilos **inline** basta armazenar em uma variavel o objeto/Json com os estilos (camelCase) e aplicar ao atribulo style={}

![Inline CSS](https://miro.medium.com/max/1680/1*1DCetf3H2xz3iWdH_kY2Pw.png)

2 - Para estilos com **classes** basta modularizar criando as classes com estilos em um arquivos separado. Logo após (1) faça o import no arquivo do componente e (2) aplique as classes com em className='classes'

![className](https://miro.medium.com/max/1400/1*U8Wn3pxQcDMVEj9P-QiOSg.png)

## 3 - Stateful x Stateless

Antes do React Hooks as aplicações podiam ser classificadas com
1. Stateful: usa estados.
2. Stateless: não usa estados

![Lifecicle](https://miro.medium.com/max/1400/1*2-4XCBNspIBTWKE1E5vmmw.png)

O Stateful possui gerenciamento de estados dentro do componente e geralmente é criado com classes.
O Stateless não possui gerenciamente de estados e é construido com fuções.

Após os React Hooks (2018) o Stateless podem utilizar estados com o hook React.useState() e assim a nomenclatura mudou para:

1. Class Components / Componentes de Classes
2. Function Componentes / Componentes Funcionais

Um componente construido com função mas sem gerenciamento de estado é um Statefull mas um componente construido com função e que use o Hook useState é um Function Component.

## 4 - Formulários

Em formulários as tags input, textarea e select mantem estado interno 

Componente controlado é quando o estado é do React