import { useState } from 'react';
import { login } from '../services/data-service';
import { useNavigate } from "react-router-dom";


function Login({ setToken }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        console.log(data)
        localStorage.setItem('token', data.token); /* graba el token en local storage */
        setToken(data.token);                      /* guarda para que este disponible */
        navigate("/");
      })
      .catch((err) => {
        setError('Invalid e-mail or password');
        // setToken("123"); /*Asigna un valor random - Servicio inactivo*/
        // localStorage.setItem('token', "123"); /* graba el token en local storage */
      });
  }

  return (
    <div>
      {error && <div className='alert alert-danger'>{error}</div>}
      <form className="container p-3"
        onSubmit={handleSubmit}>
        <table>
          <br></br>
          <h5>Please login to verify your credentials</h5>
          <input type='text' name='username' className='form-control mn-3 ' placeholder='Username' />john
          <br></br>
          <input type='password' name='password' className='form-control mn-3 ' placeholder='password' />P4ssW0rd!#
          <br></br>
          <button type='submit' className='btn btn-success'>
            Login
          </button>
        </table>
      </form>
    </div>
  );
}

export default Login;