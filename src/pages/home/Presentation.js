import Header from "../../components/header/Header"
import PetCard from "../../components/petCard/PetCard"
import CaseCard from "../../components/caseCard/CaseCard"

import "./styles.css";


const Home = ({
    currentTab,
    setCurrentTab,
    pets,
    cases
}) => {
    return(
        <div className="homeContainer">
			<Header/>
            <div className="homeButtonsContainer">
                <button className={currentTab === "pets" ? ("buttonSelected") : ("buttonUnselected")} onClick={() => setCurrentTab("pets")}>Pets</button>
                <button className={currentTab === "cases" ? ("buttonSelected") : ("buttonUnselected")} onClick={() => setCurrentTab("cases")}>Casos de Voluntariado</button>
            </div>
            <div className="homeContentContainer">
                {currentTab ===  "pets" ? (
                    <div className="listContainer">
                        {
                            pets.map((p) => {
                                return (
                                <div key={p.id}>
                                    <PetCard pet={p}/>
                                </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className="listContainer">
                        {
                            cases.map((vCase, i) => (
                                <div key={i}>
                                    <CaseCard vCase={vCase}/>
                                </div>
                            ))
                        }
                    </div>
                )}
			</div>
        </div>
    )
}

export default Home;