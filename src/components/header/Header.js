import logo from "../../assets/logo.jpeg"
import { useHistory } from "react-router-dom"

import "./stiles.css";

const Header = () => {
	let history = useHistory();

    return(
			<div className="headerContainer">
				<header>
            <div className="logoContainer">
								<img src={logo}/>
								<div className="nameContainer">
									<p className="logoName">4 PET</p>
									<p className="slogan">Adoção & Cuidado</p>
								</div> 
            </div>
						<div className="headerButtonsContainer">
							<button onClick={() => history.push("/petForm")} className="yellow-button">Cadastrar Pet</button>
							<button className="yellow-button">Cadastrar Caso Voluntariado</button>
						</div>
        </header>
        </div>
    )
}

export default Header;