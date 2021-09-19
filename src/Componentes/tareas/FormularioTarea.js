import React,{useState} from 'react'

const FormularioTarea=({CNT}) =>{
    const [NTarea, setNTarea] = useState('')

    const NNTarea = e => setNTarea(e.target.value)

    const CTarea = () =>{
        CNT(NTarea)
        setNTarea('')
    }
    return (
        <div className="border border bg-light mt-1">
            <h2 className="text-primary fw-bold fs-1 text-center mb-0">Formulario de Tareas
            </h2>
            <form className="">
                <div className="row">
                    <div className="col-md-11">
                        <div className="input-group mb-0">
                            <div className="input-group-prepend">
                                <svg  width="60" height="60"  class="book card border mt-4" viewBox="0 0 15 17">
                                    <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                </svg>
                            </div>
                            <input 
                            type="text"
                            className="form-control fs-3 mt-4"
                            placeholder="Nombre Tarea"
                            name="tarea"
                            value = {NTarea}
                            onChange= {NNTarea}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mb-1 mt-1">
                        <div className="d-grib">
                            <button type="button" className="text-white btn btn-primary text-white" onClick={CTarea}>
                                Guardar Tarea
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>  
    )
}

export default FormularioTarea;