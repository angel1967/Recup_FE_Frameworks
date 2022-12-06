import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar' /* Aquí importo el componente NavBar */
import SearchBar from './components/SearchBar' /* Aquí importo el comp SearchBar */
import PostsList from './components/PostsList' /* Aquí importo el componente PostList */
import Profile from './components/Profile'   /* Aquí importo el componente Profile */  

function App() {
  const [search, setSearch] = useState(""); /* Estado inicial SearchBar*/
  /* Define la funcion doSearch que recibe un texto y lo guarda en la variable*/
  function doSearch(text) {
    setSearch(text);
  }
  const [profileState, setProfile] = useState(false); /* Estado inicial Profile*/

  return (
    <div className="App"> 
    < NavBar   profile={profileState} setProfile={setProfile}/>  
    < Profile  profile={profileState} />
    { profileState === false ? <>
      < SearchBar search={search} doSearch={doSearch}  /> 
      < PostsList search={search} /> 
       </>
      : null
    }

    </div>
  );
}

export default App;
