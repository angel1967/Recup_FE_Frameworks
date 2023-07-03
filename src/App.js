import { useState, Fragment } from 'react';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* Importo la libreria*/
import NavBar from './components/NavBar' /* Aquí importo el componente Header */
import SearchBar from './components/SearchBar' /* Aquí importo el comp SearchBar */
import PostsList from './components/PostsList' /* Aquí importo el componente PostList */
import Profile from './components/Profile'   /* Aquí importo el componente Profile */
import Login from './components/Login'   /* Aquí importo el componente Login */
import Logout from './components/Logout'   /* Aquí importo el componente Logout */
import LogoutButton from './components/Logout';


function App() {
  const [search, setSearch] = useState(""); /* Estado inicial SearchBar*/
  /* Define la funcion doSearch que recibe un texto y lo guarda en la variable*/
  function doSearch(text) {
    setSearch(text);
  }
  const [profileState, setProfile] = useState(false); /* Estado inicial Profile*/
  const [tokenState, setToken] = useState(localStorage.getItem("token")); /*obtenemos el token LOS*/

  const Title = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Harvard Art Museums</h1>
      </div>
    )
  }


  return (
    tokenState ?
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/logout" element={<Logout setToken={setToken} />} />
            <Route path="/postslist" element={<Fragment>
              <Title />
              <SearchBar doSearch={doSearch} />
              <PostsList search={search} />
            </Fragment>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </BrowserRouter>

      </div > :
      <Fragment><Title />
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>

        </BrowserRouter>
      </Fragment>
  );
}

export default App;
