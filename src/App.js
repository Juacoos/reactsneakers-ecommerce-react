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
import LazyLoad from './components/Carousel/CarouselS';



function App() {

  const images = [
		{
			id: '1',
			title: 'Deportivo',
			image:
				'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/a3f67ec7-cc0a-4d77-81b7-01b19f537a9d/sitio-web-oficial-de-nike.png',
		},
		{
			id: '2',
			title: 'Urbano',
			image:
				'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/85b1cd26-23ff-44a1-80b6-360ce24cf5ed/sitio-web-oficial-de-nike.jpg',
		}
	]
  console.log(FirebaseApp)
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              
              {/* Inicio */}
              <Route path='/' 
                element={
                  <>
                    <LazyLoad images={images} />
                    <ItemListContainer
                    greeting={"Bienvenido! Aquí están los productos"}/>
                  </>
                  }
                />

              {/* Productos por categoria */}
              <Route path='/category/:categoryID' 
                element={
                  <>

                    
                    <ItemListContainer/>
                  </>}
                  />

                  {/* Detalle de producto */}
              <Route 
                path='/producto/:itemID' 
                element={<ItemDetailContainer/>}/>
                
              
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
