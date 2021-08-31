import React, { useEffect } from "react";
import petsService from "../../services/petsService";
import Presentation from "./Presentation"

const Home = ({}) => {
    const [currentTab, setCurrentTab] = React.useState("pets");
    const [pets, setPets] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
				console.log(openModal)
    }

    useEffect(() => {
      (async () => {
        const returnedPets = await petsService.findAll();
        setPets(returnedPets)
      })()
    }, [])

    return(
      <Presentation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        pets={pets}
        toggleModal={toggleModal}
        openModal={openModal}
      />
    )
}

export default Home;