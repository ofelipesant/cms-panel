import { gql, useQuery } from "@apollo/client"
import { useContext, useEffect } from "react"
import { panelContext } from "../../contexts/PanelContext"
import ProductCardList from "../../components/ProductCardList"

const GET_PRODUCTS = gql`
    query{
        products{
            id
            name
            description
            price
            image{
                url
            }
        }
    }
`

export default function ProductsList(){
    const { data } = useQuery(GET_PRODUCTS)
    const { products, setProducts } = useContext(panelContext)

    useEffect(() => {
        setProducts(data)
    }, [data])

    return(
        <section className="section-products-list">
            {products && products.products.map((product) => {
                return(
                    <ProductCardList products={product} key={product.id}/>
                )
            })}
        </section>
    )
}