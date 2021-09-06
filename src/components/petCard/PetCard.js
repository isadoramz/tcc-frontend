import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import "./styles.css";

const PetCard = ({ pet, openModal, toggleModal }) => {

    return(
			<>
				<div className="card">
						<img src={pet.img} className="card-img-top" alt="pet profile picture"/>
						<div className="card-body">
								<h5 className="card-title">{pet.name}</h5>
								<button onClick={toggleModal} className="moreInformationButton">+ sobre mim</button>
						</div>
				</div>
				<Modal
					show={openModal}
					onHide={toggleModal}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header toggleModal>
						<Modal.Title id="contained-modal-title-vcenter">
							{pet.name}	
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="petInformationModalContainer">
							<img src={pet.img} className="modalProfilePicture" alt="pet profile picture"/>
							<div className="petInformationModal">
								<p className="infoTitle">Idade: {pet.age}</p>
								<p className="infoTitle">Raça: {pet.breed}</p>
								<p className="infoTitle">Descrição: {pet.description}</p>
							</div>
						</div>
						<div className="contactInfoContainer">
							<h2 className="contactInformationTitle">Contatos com o responsável:</h2>
							<p className="infoTitle">E-mail: {pet.responsible.email}</p>
							<div className="phoneNumber">
								<p className="infoTitle">Telefone: {pet.responsible.phoneNumber}</p>
								<p className="infoTitle">WhatsApp: {pet.responsible.whatsapp}</p>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button className="modalCloseButton" onClick={toggleModal}>Fechar</button>
					</Modal.Footer>
				</Modal>
			</>
    )
}

export default PetCard;