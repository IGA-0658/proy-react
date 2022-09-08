import './Estilos.css'; /* le pongo hoja de estilos css*/
import {useState} from 'react';

const ProductoDefault = {
    nombre: "Prod1",
    precio: 100,
    categoria: "indumen",
    terminos: false,
    tipoEnvio: "envio",
    detalles: "Sin observ"

}

export const Edicion = (props) => {

    /* forma resumida, con lo de arriba reemplazo todo lo de abajo, ahora tengo un solo objeto */

    const [producto, setProducto] = useState({ProductoDefault});

    /* >>>> de esta manera lo de abajo ya no va mas

    const [nombre, setNombre] = useState("Prod1");  usf short 
    const [precio, setPrecio] = useState(100);
    const [categoria, setCategoria] = useState("Indumen");
    const [tipoEnvio, setTipoEnvio] = useState("envia");
    const [terminos, setTerminos] = useState(false); deschequeado true chequeado 
    const [detalles, setDetalles] = useState("Sin observaciones"); text area
    const [rutaFoto, setrutaFoto] = useState("/logo192.png");
    */

    /* llamo el estilo del form */
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        border: '3px dashed red',
        width: '80vw',
        padding: '16px'
    }

    /* llamo al onSubmit para cambiar comportamiento de boton form */
    const handleSubmit = e => {
        e.preventDefault();
        console.log(producto);
        console.log("Aqui deberia enviar el form");
    }

    const handleOnChange = e => setProducto({...producto, [e.target.name]: e.target.value});
    const handleOnChangeChecked = e => setProducto({...producto, [e.target.name]: e.target.cheked});

    return( 
    
    <>
        <p>Vista Edicion</p>
        <form style={formStyle} onSubmit={handleSubmit}> 
            <label htmlFor='input-nombre'>
                Nombre del Producto
                <input 
                    type="text" 
                    id="nombre"
                    name="nombre" 
                    placeholder="Mi producto"
                    defaultValue={producto.nombre}
                    onChange={handleOnChange}
                />
            </label>

            <label>
                Precio del Producto
                <input 
                    type="number"
                    name="precio" 
                    defaultValue={producto.precio}
                    onChange={handleOnChange}
                />
            </label>

            <label>
                Categoria del Producto
                <select
                    defaultValue={producto.categoria}
                    onChange={handleOnChange}
                >
                    <option value="">Seleccionar</option>
                    <option value="electro">Electronica</option>
                    <option value="indumentaria">Indumentaria</option>
                    <option value="alimentos">Alimentos</option>
                </select>
            </label>

            <label>
                <input 
                type="radio" 
                name="envio"
                value="retira"
                defaultChecked={producto.tipoEnvio==="retira"} 
                onChange={handleOnChange}
                />Retirar
                
                <input 
                type="radio" 
                name="envio"
                value="envia"
                defaultChecked={producto.tipoEnvio==="envia"}
                onChange={handleOnChange} 
                />Enviar
                
                <input 
                type="radio"
                name="envio" 
                value="almacena"
                defaultChecked={producto.tipoEnvio==="almacena"}
                onChange={handleOnChange} 
                />Almacenar
            </label>

            <label>
                <input type="checkbox" 
                defaultChecked={producto.terminos} 
                onChange={handleOnChangeChecked}/* en checkbox se usa checked */
                />
                Acepta terminos y condiciones
            </label>

            <label>Detalles
                <textarea 
                cols="30" 
                rows="10"
                name="detalles"
                defaultValue={producto.detalles}
                onChange={handleOnChange}
                ></textarea>
            </label>

            {/*<label>
          <input type="file" />
          <img src={rutaFoto} />
          <input type="text" defaultValue={rutaFoto} />
  </label>*/}

            <button>Guardar</button>

        </form>
    </>
    )
}
