// Componente para cerrar sesión
import React from 'react';
import '../css/styles.css'; // Archivo CSS para estilos personalizados
import { RiLogoutBoxLine } from 'react-icons/ri'; // Importamos la biblioteca de iconos
import { useNavigate } from "react-router-dom";


const LogoutButton = ({ setToken }) => {
    const navigate = useNavigate();
    const onLogout = () => {
        const confirmLogout = window.confirm("¿De verdad quieres salir?");

        if (confirmLogout) {
            console.log("si entró") //verificación de ingreso a baja
            // Borrar el token de sesión almacenado en localStorage
            localStorage.removeItem('token');
            setToken("")
            // Enviamos a la pantalla de Login
            navigate("/login");
        }
    };

    return (
        <button className="logout-button" onClick={onLogout}>
            <RiLogoutBoxLine className="logout-icon" />
            Logout
        </button>
    );
};

export default LogoutButton;
