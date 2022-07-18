import HomeCard from "../../components/HomeCard";

export default function Home(){
    return(
        <>
            <HomeCard 
            name="Produtos" 
            link="/produtos"
            icon="https://www.svgrepo.com/show/9771/box.svg"/>

            <HomeCard 
            name="Pedidos" 
            link="/pedidos"
            icon="https://www.svgrepo.com/show/138079/invoice.svg"/>
        </>
    )
}