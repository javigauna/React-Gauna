import './App.css';
import  ItemCount from './Components/NavBar/ItemCount';
import ItemListContainer from './Components/NavBar/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="hola mundo" />
      <hr />
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
