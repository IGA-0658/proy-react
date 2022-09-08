import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import IndexPage from "./pages/Index/IndexPage";
import Details from "./pages/Details/DetailsPage";

function App() {
  return (
   <Routes>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/detail/:id" element={<Details/>}/>
    <Route path="/cart" element={<CartPage/>}/>
   </Routes>
    
  );
}

export default App;
