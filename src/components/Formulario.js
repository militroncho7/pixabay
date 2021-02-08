import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    //useState para colocar en el state lo que el usuario escriba 
    const [ termino, guardarTermino ] = useState('');
    const [ error,guardarError ] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //validar form
        if(termino.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //enviar termino de busqueda hacia el componente principal
        guardarBusqueda(termino);
    }

    return (
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: tecnología o deportes"
                        onChange={ e => guardarTermino(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
    );
}
 
export default Formulario;