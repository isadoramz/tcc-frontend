import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import wppIcon from "../../assets/wpp.png"

const PetModal = ({openModal, toggleModal, pet}) => {
  return (
    <Modal
					show={openModal}
					onHide={toggleModal}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header toggleModal>
						<Modal.Title id="contained-modal-title-vcenter">
							Oi, eu sou {pet.name}!
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="petInformationModalContainer">
							<img src={pet.img} className="modalProfilePicture" alt="pet profile picture"/>
							<div className="petInformationModal">
								<p className="infoTitle">Idade</p>
								<p className="infoText">{pet.age}</p>
								<p className="infoTitle">Raça</p>
								<p className="infoText">{pet.breed}</p>
								<p className="infoTitle">Descrição</p>
								<p className="infoText">{pet.description}</p>
							</div>
						</div>
							<h2 className="contactInformationTitle">Contatos com o responsável</h2>
              <div className="contactInfoContainer">
                <div>
                  <p className="infoTitle">E-mail</p>
                  <p className="infoText">{pet.responsible.email}</p>
                </div>
                <div>
                  <p className="infoTitle">Telefone</p>
                  <p className="infoText">{pet.responsible.phoneNumber}</p>
                </div>
                <a href={`https://wa.me/55${pet.responsible.whatsapp}/`} target="_blank"><img className="wppIcon" src={wppIcon}/></a>
              </div>
					</Modal.Body>
					<Modal.Footer>
						<button className="modalCloseButton" onClick={toggleModal}>Fechar</button>
					</Modal.Footer>
				</Modal>
  )
}

export default PetModal;