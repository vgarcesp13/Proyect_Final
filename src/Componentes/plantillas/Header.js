import React from 'react'
import {useState} from "react"

const Header =()=> {
    const [user, setUser] = useState(null)
    const login = () => {
      setUser({id : 1, nombre: "Alejandro"})
    }
    const logout= () =>{
      setUser(null)
    }
    return (
        <nav className="navbar navbar-light" Style="background-color: #C2C3FF">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 fs-4 text-primary">Usuario: <spam className="text-dark">{user ? user.nombre : " Usuario No Autentificado"}</spam></span>
          {user 
          ? ( <button 
                type="button" 
                className="btn btn-primary"
                onClick={logout}  
                >Cerrar Sesión
              </button>)  
            : (<button 
                type="button" 
                className="btn btn-primary"
                onClick={login}  
                >Iniciar Sesión
              </button>)
          }
        </div>
      </nav>
    )
}

export default Header
