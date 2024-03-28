import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../App';



export const userLogout = async (setUser, setToken) => {
  try {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

function LogoutComponent() {
  const nav = useNavigate()
  const { setToken, setUser } = useContext(AppContext)

  const handleLogout = () => {
    userLogout(setToken, setUser);
    nav('/');
  }

  return (
    <div>
      <h3>are you sure you want to log out?</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutComponent