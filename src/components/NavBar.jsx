import { useState } from 'react';

function NavBar( { profile, setProfile }) {
   
    const activaApaga = () => {
        setProfile(!profile);}  


    return<div> 
    <nav className="navbar navbar-expand-lg bg-light text-dark">
        <div className="container-fluid">
            <a className="navbar-brand" onClick={() => setProfile(false)}
            href="#"><i 
            className="bi bi-lightning-charge"></i>three pics
            </a> 
            <button onClick={activaApaga}
            type="button" 
            className="btn btn-secondary btn-circle btn-xl bi bi-lg bi-person-circle">
            </button>
      
        </div>
    </nav>
    </div>;
}
export default NavBar;



