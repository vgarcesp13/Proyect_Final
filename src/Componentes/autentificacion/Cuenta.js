import React, {useState} from "react"
import { Link } from "react-router-dom";

const Cuenta = (props)=> {
    const[usuario, guardarUsuario] = useState({
        nombre: '',
        email:'',
        password:'',
        conpassword:''
    })

    const {nombre,email,password,conpassword} = usuario;
    const onChange = e => {
        guardarUsuario({...usuario,[e.target.name]:e.target.value})      
    }

    //iniciio de sesion
    const onSubmit = e => {
       e.preventDefault();
       
       //Se valida campos vacios
        if(nombre.trim() === '' || email.trim() === ''
        || password.trim() === ''
        || conpassword.trim() === ''){             
            alert ('Debe LLenar los Campos son Obligatorios');
            return;
       }

       //Contraseña minimo de caracter
       if(password.length < 6){
        alert ('La contraseña debe tener Minimo 6 Caracteres');
        return;  
       }

       if(password !== conpassword){
        alert ('Contraseñas no Coinciden','alerta-error');
        return;  
       }else{
        window.location.href ="/"
    }
   } 
   
   return ( 
    <div className='container'>
        <div className="row d-flex justify-content-center mt-5" >
            <div className="col-10 col-sm-10 col-md-6 col-lg-5 col-xl-5 col-xxl-5" >
                <div class="card border-dark border-2 bg-ligth min-vw-50 py-4">
                    <div class="card-body">
                        <h2 className="text-center">Crear Cuenta</h2>
                        <form onSubmit={onSubmit} >
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text text-danger fs-4 fw-bold"><img width="25" src="https://image.flaticon.com/icons/png/512/552/552721.png" alt=""/></span>
                                        </div>
                                        <input
                                            type="nombre"
                                            className="form-control"
                                            placeholder="Name"
                                            name="nombre"
                                            aria-describedby="basic-addon1"
                                            value={nombre}
                                            onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">                                            
                                            <span className="input-group-text text-danger fs-4 fw-bold"><img width="25" src="https://image.flaticon.com/icons/png/512/1633/1633686.png" alt=""/></span>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="E-mail"
                                            name="email"
                                            aria-describedby="basic-addon2"
                                            value={email}
                                            onChange={onChange}/>
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
                                            aria-describedby="basic-addon3"
                                            value={password}
                                            onChange={onChange}/>
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
                                            placeholder="Confirm Password"
                                            name="conpassword"
                                            aria-describedby="basic-addon4"
                                            value={conpassword}
                                            onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="d-flex justify-content-around">
                                    <div className='col-md-6 text-center'>
                                        <div className="campo-form">
                                            <input type="submit" className="btn btn-outline-secondary" value="Crear Cuenta"/>
                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <Link to={'/'} className="btn btn-outline-secondary" >
                                            Iniciar Sesion 
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

export default  Cuenta;
