import React from 'react'

const Tarea=({tarea}) =>{
    return (
        <tr>
            <td>
                {tarea.nombre}
            </td>
            <td>{tarea.estado ?
                (<button className="btn btn-info">Completada</button>):
                (<button className="btn btn-primary">Incompleta</button>)}
            </td>
            <td>
                <button className="btn btn-outline-success">Editar</button>
            </td>
            <td>
                <button className="btn btn-outline-danger">Eliminar</button>
            </td>
        </tr>
    )
}

export default Tarea;