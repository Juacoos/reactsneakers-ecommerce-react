import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import { CartView } from './components/CartView/CartView';
import FirebaseApp from './services/firebase';
import ThankYou from './components/TrankYou/ThankYou';
import Footer from './components/Footer/Footer';


function App() {
  console.log(FirebaseApp)
  return (
    <div className="App">
      <CartContextProvider>
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
              
              <Route 
                path='/cart' 
                element={<CartView/>} />


              <Route 
                path='/thankyou/:orderId' 
                element={<ThankYou/>} />

              <Route path="*" element={<h4>Error 404 xdn't</h4>}/>


            </Routes>
            <Footer/>
        </BrowserRouter>

      </CartContextProvider>
    </div>
  );
}

export default App;
