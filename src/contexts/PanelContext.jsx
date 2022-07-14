import { createContext, useState } from "react";

export const panelContext = createContext()

export const PanelContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])

    return(
        <panelContext.Provider value={{
            products,
            setProducts,
            orders,
            setOrders
        }}>
            {children}
        </panelContext.Provider>
    )
}