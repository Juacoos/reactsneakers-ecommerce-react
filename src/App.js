import './App.css';
/* import NavBar from './components/NavBar/NavBar'; */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <NavBar/>
          <Routes>
            
            {/* Inicio */}
            <Route path='/' 
              element={<ItemListContainer
              greeting={"Bienvenido! Aquí están los productos"}/>}
              />

            {/* Productos por categoria */}
            <Route path='/category/:categoryID' 
              element={<ItemListContainer/>}
              />

                {/* Detalle de producto */}
            <Route 
              path='/producto/:itemID' 
              element={<ItemDetailContainer/>} />

            
            <Route path="*" element={<h4>Error 404 xdn't</h4>}/>


          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
