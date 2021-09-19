import Tarea from './Tarea'
import FormularioTarea from './FormularioTarea'
import  React,{useState} from 'react'

const MostrarTareas =()=> {
    const [Tareas,setTareas]= useState([
        {nombre: 'Elegir Sistema Operativo',estado:true},
        {nombre: 'Elegir Base de Datos',estado:false},
        {nombre: 'Elegir Lenguaje',estado:true},
        {nombre: 'Elegir Frameworks',estado:false}]
        )
    
    const CNTarea = NombreT => {
        if (!Tareas.find(T => T.nombre === NombreT) && NombreT !== ''){
            setTareas([...Tareas,{nombre:NombreT,estado:false}])
        }
        else if (Tareas.find(T => T.nombre === NombreT)){
            alert("No puede haber dos tareas con el mismo nombre")
        }
        else{
            alert("No puede haber una tarea sin nombre")
        }
    }

    return (
        <div>
            <div className="row d-flex  bg-ligth justify-content-center m-1">
                <div className="col-md-5">
                    <FormularioTarea CNT= {CNTarea}/>
                </div>
            </div>
            <div className="text-center mt-3 bg text-danger m-5">
                <div className="d-flex justify-content-between">
                    <h2 className="text-primary">
                        Proyecto:
                        <span className="text-dark"> Comercio Electrónico</span>
                    </h2>
                    <button type="submit" className="text-white btn btn-primary text-white">
                        Eliminar Proyecto
                    </button>
                </div>
                {Tareas.length===0 ?
                    (<h1>Sin Tarea</h1>):
                    (<div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tarea</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tareas.map(tarea =>
                                    (<Tarea tarea = {tarea}/>   
                                ))}
                            </tbody>
                        </table>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default MostrarTareas;