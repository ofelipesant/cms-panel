import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PanelContextProvider } from '../contexts/PanelContext'
import CreateProduct from '../pages/CreateProduct'
import Home from '../pages/Home'
import OrdersList from '../pages/OrdersList'
import Product from '../pages/Product'
import ProductsList from '../pages/ProductsList'


export default function RoutesApp(){
    return(
        <PanelContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="produtos" element={<ProductsList/>}/>
                    <Route path='produtos/cadastro' element={<CreateProduct/>}/>
                    <Route path='products/cadastro/:id' element={<Product/>}/>
                    <Route path="pedidos" element={<OrdersList/>}/>
                </Routes>
            </BrowserRouter>
        </PanelContextProvider>
    )
}
