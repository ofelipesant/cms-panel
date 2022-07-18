import { useContext, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { panelContext } from '../../contexts/PanelContext'
import OrdersCardList from '../../components/OrdersCardList'

const GET_ORDERS = gql `
    query{
        orders{
            id
            totalPrice
            products{
                id
            }
        }
    }
`

export default function OrdersList(){
    const { orders, setOrders } = useContext(panelContext)
    const { data } = useQuery(GET_ORDERS)

    useEffect(() => {
        setOrders(data)
    }, [data])

    return(
        <section className='orders-list-section'>
            {orders && orders.orders.map((order) => {
                return(
                    <OrdersCardList key={order.id} orders={order}/>
                )
            })}
        </section>
    )
}