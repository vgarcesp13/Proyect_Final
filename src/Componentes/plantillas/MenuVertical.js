import React from 'react';
import MostrarProyectos from '../proyectos/MostrarProyectos';

function MenuVertical() {
    return (
        <aside className="text-center p-4">
            <h2 className="fst-italic text-dark mt-1 mb-5">Gestor De <spam className="text-primary">Proyectos</spam></h2>
            <MostrarProyectos/>
         </aside>
        )
}
export default MenuVertical;
