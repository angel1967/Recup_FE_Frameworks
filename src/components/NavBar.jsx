import { useState } from 'react';
import React from 'react'; //Logout
import '../css/styles.css'; // Logout archivo CSS para estilos personalizados

function NavBar({ profile, setProfile }) {

    const activaApaga = () => {
        setProfile(!profile);
    }
    console.log("valor de Profile en Header", profile); //MAC 01 Checador

    return <div>
        <nav className="Navbar Navbar-expand-lg bg-light text-dark">
            <div className="container-fluid d-flex justify-content-between">
                <a className="Navbar-link" href="/">
                    <i className="bi bi-lightning-charge text-dark"></i> Three pics
                </a>
                <a className=" Navbar-link" href="/postslist">Post</a>
                <a className=" Navbar-link" href="/logout">Logout</a>

                <a href="/profile"
                    className="btn btn-secondary btn-circle btn-xl"
                    style={{ position: 'relative', padding: 0 }}   >
                    <i className="bi bi-person-circle"
                        style={{
                            fontSize: '2.5rem', lineHeight: '1.2', position: 'absolute', left: '0.1em', top: '0.0em',
                        }}
                    ></i>
                </a>
            </div>
        </nav >

    </div >;
}
export default NavBar;
