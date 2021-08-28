import React, { useEffect } from "react";
import petsService from "../../services/petsService";
import Presentation from "./Presentation"

const Home = ({}) => {
    const [currentTab, setCurrentTab] = React.useState("pets");
    const [pets, setPets] = React.useState([]);

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
      />
    )
}

export default Home;