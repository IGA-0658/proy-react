import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';

/*---> formik_2 <---*/

/* cortocircuito
if(a){
  algo()
}
a && algo()
//a es verdadero, si no es un falsy (undefined, null, false, '', 0, NaN)
*/

const myComponent = ({children}) => (<div style={{color:'blue'}}>{children}</div>);

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
          apodo: "",
          correo: ""
        }}
        validate={validacion}
        onSubmit={envioFormulario}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="apodo">Apodo</label>
              <Field 
                type="text" 
                name="apodo"
                id="apodo"
              />
              <ErrorMessage name="apodo" component="div" />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field 
                type="text" 
                name="correo" 
                id="correo"
              />
              <ErrorMessage 
                name="correo"
                /* se puede usar cualq de los 3 */
                component={myComponent}    
                //component={props => <strong>{props.children}</strong>} 
                //render={msg => <em>{msg}</em>}
                 />
            </div>
            <button>Guardar</button>
          </Form>
        )}
      </Formik>
    </>
  )
}