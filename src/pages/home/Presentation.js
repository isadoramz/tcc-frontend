import Header from "../../components/header/Header"
import PetCard from "../../components/petCard/PetCard"
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import "./styles.css";


const Home = ({
    currentTab,
    setCurrentTab,
    pets,
    toggleModal,
    openModal
}) => {
    return(
        <div className="homeContainer">
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
                                    <PetCard pet={pet} toggleModal={toggleModal} openModal={openModal}/>
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