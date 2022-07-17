import { Link } from "react-router-dom"

export default function ProductCardList(props){
    const { products } = props

    return(
        <Link to={`${products.id}`}>
            <div className="product-card-list">
                <div className="image-container">
                    <img src={products.image[0].url} alt="foto do produto" />
                </div>

                <div className="product-infos">
                    <h2>{products.name}</h2>
                    <h3>{products.price}</h3>
                </div>
            </div>
        </Link>
    )
}