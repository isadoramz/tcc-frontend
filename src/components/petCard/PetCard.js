import React, { useEffect } from "react";
import PetModal from "./PetModal";
import "./styles.css";

const PetCard = ({ pet }) => {
	const [openModal, setOpenModal] = React.useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return(
			<>
				<div className="card">
						<img src={pet.img} className="card-img-top" alt="pet profile picture"/>
						<div className="card-body">
								<h5 className="card-title">{pet.name}</h5>
								<button onClick={toggleModal} className="moreInformationButton">+ sobre mim</button>
						</div>
				</div>
				<PetModal openModal={openModal} toggleModal={toggleModal} pet={pet}/>
			</>
    )
}

export default PetCard;