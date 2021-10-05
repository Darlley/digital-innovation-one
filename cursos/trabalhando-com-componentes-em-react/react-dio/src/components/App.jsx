import Card from './Card';
import Item from './Item';

const App = () => {
  return (
    <>
      <h1>Curso de React da DIO</h1>
      <p>Aluno Darlley Brasil de Brito Furtado</p>
      <ul className="list-group">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
    </>
  )
}

export default App;