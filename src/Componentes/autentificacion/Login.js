import React, {useState} from "react"
import { Link } from "react-router-dom";

const Login = ()=> {
    const[usuario, guardarUsuario] = useState({
        email:'',
        password:''
    })

    const {email,password} = usuario;
    const onChange = e => {
        guardarUsuario({...usuario,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){             
             alert ('Debe LLenar los Campos son Obligatorios');
        }else{
            window.location.href ="/proyectos"
        }
    } 
     
    return ( 
        <div className='container'>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-10 col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                    <div class="card border-dark border-2 bg-gradient bg-ligth min-vw-50 py-4">
                        <div class="card-body">
                            <h2 className="text-center" >Iniciar Sesion</h2>
                            <form onSubmit={onSubmit} >
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold"><img width="25" src="https://image.flaticon.com/icons/png/512/552/552721.png" alt=""/></span>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            aria-describedby="basic-addon1"
                                            value={email}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text text-danger fs-4 fw-bold"><img width="25"  src="https://image.flaticon.com/icons/png/512/483/483408.png" alt=""/></span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            aria-describedby="basic-addon2"
                                            value={password}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className='row'>
                                    <div className="d-flex justify-content-around">
                                        <div className='col-md-6 text-center'>
                                            <button className="btn btn-outline-secondary">Iniciar Sesion</button>
                                        </div>
                                        <div className='col-md-6 text-center'>
                                            <Link to={'/cuenta'} className="btn btn-outline-secondary" >
                                                Obtener Cuenta 
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
          )
    }
export default  Login;

