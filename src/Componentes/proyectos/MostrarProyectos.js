import  React,{useState} from 'react'
import Proyecto from './Proyecto'
import CrearProyecto from './CrearProyecto'

const MostrarProyectos = () => {
    const [Proyectos,setProyectos]= useState([
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño Sitio Web'}
        ])

    const CNProyecto = NomProyecto => {
        if (!Proyectos.find(P => P.nombre === NomProyecto) && NomProyecto !== '' ){
            setProyectos([...Proyectos, {nombre: NomProyecto}])
        }
        else if (Proyectos.find(P => P.nombre === NomProyecto)){
            alert("No puede haber dos proyectos con el mismo nombre")
        }
        else{
            alert("No puede haber un proyecto sin nombre")
        }
    }

    return (
        <div>
            <CrearProyecto NuevoP= {CNProyecto}/>
            <h3 className="text-dark border-bottom pt-2 pb-1 mt-3 mb-4 fw-bold">Panel De <spam className="text-primary">Proyectos</spam></h3>
            <div className="list-group">
                {Proyectos.map (proyecto =>(
                    <Proyecto proyecto = {proyecto}/>    
                ))}
            </div>
        </div>
    )
}

export default MostrarProyectos