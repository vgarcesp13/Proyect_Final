import React from 'react'
import MenuVertical from '../plantillas/MenuVertical'
import Header from '../plantillas/Header'
//import FormularioTarea from '../tareas/FormularioTarea'
import MostrarTareas from './../tareas/MostrarTareas';

const Proyectos =()=> {
    return (
        <div className= "container-fuild">
            <div className = "row min-vh-100 text-white fw-bold">
                <div className = "col-md-3 m-0 p-0 " Style="background-color: #9AA4FF">
                    <MenuVertical/>
                </div>
                <div class=" col-md-9 bg-light m-0 p-0">
                    <Header/>
                    <main>
                        <MostrarTareas/>  
                    </main>
                </div>
            </div>
        </div>  
    )
}

export default Proyectos;
