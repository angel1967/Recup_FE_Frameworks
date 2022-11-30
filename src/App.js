import './App.css';
import Header from './components/Header' /* Aquí importo el componente Header MAC 1126*/
import SearchBar from './components/SearchBar' /* Aquí importo el comp SearchBar MAC 1126*/
import PostList from './components/PostList' /* Aquí importo el componente PostList MAC 1126*/


function App() {
  return (
    <div className="App"> 
    < Header />  
    < SearchBar /> 
    < PostList />
    </div>
  );
}

export default App;
