import Header from "../../components/header/Header"
import Card from "../../components/card/Card"

import "./styles.css";


const Home = ({
    currentTab,
    setCurrentTab,
    pets
}) => {
    return(
        <div>
			<Header/>
            <div className="homeButtonsContainer">
                <button className={currentTab === "pets" ? ("registerButtonSelected") : ("registerButton")} onClick={() => setCurrentTab("pets")}>Pets</button>
                <button className={currentTab === "cases" ? ("registerButtonSelected") : ("registerButton")} onClick={() => setCurrentTab("cases")}>Casos de Voluntariado</button>
            </div>
            <div className="homeContentContainer">
                {currentTab ===  "pets" ? (
                    <div className="petsContainer">
                        {
                            pets.map((pet, i) => (
                                <div key={i}>
                                    <Card pet={pet}/>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        CASOS
                    </div>
                )}
             </div>
            
        </div>
    )
}

export default Home;