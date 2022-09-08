import './Estilos.css'; /* le pongo hoja de estilos css*/
import {useState} from 'react';
export const Edicion = (props) => {

    /* =====>> Original <<===== */

    /* creo estados para mis variables del form */
    const [nombre, setNombre] = useState("Prod1");
    const [precio, setPrecio] = useState(100);
    const [categoria, setCategoria] = useState("Indumen");
    const [tipoEnvio, setTipoEnvio] = useState("envia");
    const [terminos, setTerminos] = useState(false);/* deschequeado, true chequeado */

    const [detalles, setDetalles] = useState("Sin observaciones"); /* text area */
    const [rutaFoto, setrutaFoto] = useState("/logo192.png");

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
        console.log({nombre, precio, categoria});
        console.log("Aqui deberia enviar el form");
    }

    return( 
    
    <>
        <p>Vista Edicion</p>
        {/* <form style={{ border: '3px dashed red'}}> estilo form o con CSS import o con objeto java como esta arriba */}
        {/* con onSubmit cambio submit por defecto del form html */}
        <form style={formStyle} onSubmit={handleSubmit}> 
            <label htmlFor='input-nombre'>
                Nombre del Producto
                <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Mi producto"
                    defaultValue={nombre}/* toma el seteado arriba */
                    onChange={e => setNombre(e.target.value)}/* para que cambie el estado del componente react */
                />
            </label>

            <label>
                Precio del Producto
                <input 
                    type="number" 
                    defaultValue={precio}
                    onChange={e => setPrecio(e.target.value)}
                />
            </label>

            <label>
                Categoria del Producto
                <select
                    defaultValue={categoria}
                    onChange={e => setCategoria(e.target.value)}
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
                defaultChecked={tipoEnvio==="retira"} 
                onChange={e=>setTipoEnvio("retira")}
                />Retirar
                
                <input 
                type="radio" 
                name="envio"
                defaultChecked={tipoEnvio==="envia"}
                onChange={e=>setTipoEnvio("envia")} 
                />Enviar
                
                <input 
                type="radio"
                name="envio" 
                defaultChecked={tipoEnvio==="almacena"}
                onChange={e=>setTipoEnvio("almacena")} 
                />Almacenar
            </label>

            <label>
                <input type="checkbox" 
                defaultChecked={terminos} 
                onChange={e => setTerminos(e.target.checked)}/* en checkbox se usa checked */
                />
                Acepta terminos y condiciones
            </label>

            <label>
                Detalles
                <textarea 
                cols="30" 
                rows="10"
                defaultValue={detalles}
                onChange={e=>setDetalles(e.target.value)}
                ></textarea>
            </label>

            {/* <label>
                <input type="file"/>
                <img src={rutaFoto}/>
                <input type="text" defaultValue={rutaFoto}/>
            </label> */}

            <button>Guardar</button>

        </form>
    </>
    )
}
