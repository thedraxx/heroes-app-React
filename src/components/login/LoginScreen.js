import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = () => {

    // Busca en localstorage la ultima pagina visitada, si la encuentra te redirige sino te manda al home
    const lastPath = localStorage.getItem('lastPath') || '/';

    //Dispatch para que el componente AuthContext sepa que se ha hecho login
    const action = {
      type: types.login,
      payload: { name: 'fernando', }
    }
    dispatch(action);

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
