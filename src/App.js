import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar' /* Aquí importo el componente NavBar */
import SearchBar from './components/SearchBar' /* Aquí importo el comp SearchBar */
import PostsList from './components/PostsList' /* Aquí importo el componente PostList */
import Profile from './components/Profile'   /* Aquí importo el componente Profile */
import Login from './components/Login'   /* Aquí importo el componente Login */

function App() {
  const [search, setSearch] = useState(""); /* Estado inicial SearchBar*/
  /* Define la funcion doSearch que recibe un texto y lo guarda en la variable*/
  function doSearch(text) {
    setSearch(text);
  }
  const [profileState, setProfile] = useState(false); /* Estado inicial Profile*/
  const [tokenState, setToken] = useState("123"); /* Estado inicial (Token)Login*/


  return (
    <div className="App">

      {tokenState !== "" ? (
        <>
          < NavBar profile={profileState} setProfile={setProfile} />
          < Profile profile={profileState} />

          {profileState === false ? <>
            < SearchBar search={search} doSearch={doSearch} />
            < PostsList search={search} />
          </>
            : null
          }  </>
      ) : (
        < Login setToken={setToken} />
      )
      }
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;