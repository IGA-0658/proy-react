import { Formik } from 'formik';
import React, { useState} from 'react';

/* cortocircuito
if(a){
  algo()
}
a && algo()
//a es verdadero, si no es un falsy (undefined, null, false, '', 0, NaN)
*/

export function Edicion (props) {

    const validacion = (values) => {
      let errores = {};
  
      if(values.apodo.trim() === ""){
        errores.apodo = "El apodo no puede quedar vacio";
      }
  
      if(values.correo.trim() === ""){
        errores.correo = "El email no puede quedar vacio";
      }
  
      return errores;
    }
  
    const envioFormulario = (values) => {
      console.log("Enviar: ", values);
    }
  
    return (
        <>
        <Formik
            initialValues={{
                /* apodo: "Pepe",
                correo: "noreply@pepe.com" */
                apodo: "",
                correo: ""
            }}
            validate={validacion}
            onSubmit={envioFormulario}
        >
         {({ values, errors, touched, handleChange, handleBlur, handleSubmit}) => {
          //console.log(props)
          return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="apodo">Apodo</label>
              <input 
                type="text" 
                name="apodo"
                id="apodo" 
                value={values.apodo} 
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.apodo && errors.apodo && <div style={{color:'red'}}>{errors.apodo}</div>}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input 
                type="text" 
                name="correo" 
                id="correo" 
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && <div style={{color:'red'}}>{errors.correo}</div>}
            </div>
            <button>Guardar</button>
          </form>
          )
        }}
      </Formik>
    </>
  )
}