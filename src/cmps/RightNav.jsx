import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faHome , faSearch, faBook} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export const RightNav = () =>{
    return(
        <section className="right-nav">
            <h1 className="main-title">Spotifly <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon></h1>
            <hr className="bottom-hr" />
            <nav>
                <NavLink className="nav-link" to={"/"}> <div className="icon-w "><FontAwesomeIcon className="icon" icon={faHome}> </FontAwesomeIcon></div>  Home </NavLink>
                <NavLink className="nav-link" to={"/search"}> <div className="icon-w "><FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon></div>  Search  </NavLink>
                <NavLink className="nav-link" to={"/library"}> <div className="icon-w "><FontAwesomeIcon className="icon" icon={faBook}></FontAwesomeIcon></div> Your library  </NavLink>
            </nav>
        </section>
    )
}