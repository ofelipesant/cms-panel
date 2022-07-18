import { Link } from "react-router-dom"

export default function HomeCard(props){
    const { name, link, icon } = props

    return(
        <Link to={link}>
            <div className="home-card">
                <h2>{name}</h2>
                <img src={icon} alt="icone" width={80}/>
            </div>
        </Link>
    )
}