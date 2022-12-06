import { useState } from 'react';
import imageProfile from '../img/FotoMAC.png';

function Profile( {profile}) {
    const username = '@castaned';
    const bio = 'Estudiante de Mastér de Full Stack Develoment.';

    
    if (profile === (true)) {
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
            <div className='d-flex justify-content-center'>{bio}</div>
          </div>
        );
      }
}
export default Profile;
