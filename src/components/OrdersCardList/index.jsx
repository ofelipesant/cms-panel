export default function OrdersCardList(props){
    const { orders } = props

    const quantity = orders.products.length
  
    return(
        <div className="order-card-list">
            <h3 className="quantity">
                {quantity == 1 ? `${quantity} item` : `${quantity} itens`}
            </h3>
            <h3 className="total-price">R${orders.totalPrice.toFixed(2)}</h3>
        </div>
    )
}