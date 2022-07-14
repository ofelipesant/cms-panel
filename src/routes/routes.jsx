import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PanelContextProvider } from '../contexts/PanelContext'
import Home from '../pages/Home'
import Orders from '../pages/Orders'
import Products from '../pages/Products'


export default function RoutesApp(){
    return(
        <PanelContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="produtos" element={<Products/>}/>
                    <Route path="pedidos" element={<Orders/>}/>
                </Routes>
            </BrowserRouter>
        </PanelContextProvider>
    )
}
