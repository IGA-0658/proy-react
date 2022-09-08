import React from "react";
import { Navigate } from 'react-router-dom';

function autenticado(){
  //return { user: 'Pepe' }
  return null;
}

const ProtectedRoute = (props) => {
  const user = autenticado();
  if(user){
    return props.children;
  }
  
  return (<Navigate to="/" />);
  //return (<div>No tienes permiso</div>);
}

export default ProtectedRoute;