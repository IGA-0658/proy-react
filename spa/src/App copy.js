import { Routes, Route, NavLink, Link, Outlet, useParams, useRoutes, useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

let activeStyle = {
  textDecoration: "underline",
  color: 'red',
  fontWeight: 'bold'
};



const Menu = props => (
  <ul>
    {/* -- ejemplo agregado -- */}

    <Anchor miFuncion={(isActivo)=>isActivo?{color:'green'}:undefined} texto="Hola" link="https://google.com" />
    
    {/* -- fin ejemplo -- */}
    <li><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink></li>
    <li><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/products">Productos</NavLink></li>
    <li><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/contact">Contacto</NavLink></li>
  </ul>
)

const Home = props => <div>Mi Home</div>;

const Products = props => {
  const products = [
    { id: 10, name: 'Remeras', ctr: 'ar', ctg: 'w' },
    { id: 20, name: 'Patalones', ctr: 'br', ctg: 'wz' },
    { id: 30, name: 'Camperas', ctr: 'cl', ctg: 'wx' },
  ];

  return (
    <>
      <div>Mis productos</div>
  <ul>
  { products.map(({id, ctg, ctr, name}) => <li key={id}><Link to={[ctr,ctg,id].join('/')}>{name}</Link></li>) }
    {/* <li><Link to="ar/w/10">Remeras</Link></li>
    <li><Link to="cl/wz/34">Pantalones</Link></li> */}
  </ul>
      <div style={{border:'3px dashed blue', padding: '20px'}}>
        <Outlet/>
      </div>
    </>
  );
}

const ProductDetail = props => {
  const { id, country, category } = useParams();

  return <div>Mi Producto {id} del pais {country} categoria {category}</div>
};

const Contact = props => <div>Contacto</div>;
const NotFound = props => <div>Página no encontrada</div>;

const misRoutes = [
  { path: '/', element: <Home/> },
  { path: '/products', 
    element: <Products/> , 
    children: [
      { path: '/products/:country/:category/:id', element: <ProductDetail/> }
    ]},
  { path: '/contact', element: <ProtectedRoute><Contact/></ProtectedRoute> },
  { path: '*', element: <NotFound/> },
];

function App() {
  const routesElement = useRoutes(misRoutes);

  return (
    <>
      <div>Probando el router</div>
      <input type="text" />
      <Menu />
      <div style={{border:'3px dashed red', padding: '20px'}}>
        {routesElement}
      </div>
    </>
  );
}

export default App;