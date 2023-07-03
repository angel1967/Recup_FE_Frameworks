import { useState } from 'react';
import imageProfile from '../img/FotoMAC.png';

function Profile() {
  const username = '@castaned';
  const bio = 'Estudiante de Mastér de Full Stack Develoment.';
  const aviso = 'Presiona cualquiera de los iconos de la parte superior para regresar..o Logout para salir'

  return (
    <div className='d-flex align-items-center flex-column'>
      <div className='d-flex justify-content-center mt-5 pb-3'>
        <img
          src={imageProfile}
          className='bd-placeholder-img rounded-circle'
          style={{ width: '150px', height: '150px' }}
          alt='...'
        />
      </div>
      <div className='d-flex justify-content-center'>
        <h4 className='d-flex justify-content-center my-3'>{username}</h4>
      </div>
      <h4 className='d-flex justify-content-center'>{bio}</h4>
      <br></br><br></br>
      <div className='d-flex justify-content-center'>{aviso}</div>
    </div>
  );
}
export default Profile;
