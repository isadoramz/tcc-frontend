import React, { useEffect } from "react";
import petsService from "../../services/petsService";
import casesService from "../../services/casesService"
import Presentation from "./Presentation"

const Home = ({}) => {
    const [currentTab, setCurrentTab] = React.useState("pets");
    const [pets, setPets] = React.useState([]);
    const [cases, setCases] = React.useState([]);

    useEffect(() => {
      if(currentTab === "pets") {
        (async () => {
          const returnedPets = await petsService.findAll();
          setPets(returnedPets)
        })()
      } else if(currentTab === "cases") {
        (async () => {
          const returnedCases = await casesService.findAll();
          setCases(returnedCases)
        })()
      }
    }, [currentTab])

    return(
      <Presentation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        pets={pets}
        cases={cases}
      />
    )
}

export default Home;