import './App.css';
import ItemListContainer from './Components/NavBar/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="hola mundo" />
    </div>
  );
}

export default App;
