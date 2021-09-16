import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import wppIcon from "../../assets/wpp.png"
import "./styles.css";

const CaseModal = ({openModal, toggleModal, vCase}) => {
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
							{vCase.title}
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="caseInformationWrapper">
							<div className="petInformationModalContainer">
								<div className="petInformationModal">
									<p className="infoTitle">Local</p>
									<p className="infoText">{vCase.local  || "Não disponível"}</p>
									<p className="infoTitle">Local</p>
									<p className="infoText">{vCase.adress  || "Não disponível"}</p>
									<p className="infoTitle">Disponibilidade de horário</p>
									<p className="infoText">{vCase.hourAvailability  || "Não disponível"}</p>
								</div>
							</div>
							<div>
								<h2 className="contactInformationTitle">Contatos com o responsável</h2>
								<div className="contactInfoContainer">
									<div>
										<p className="infoTitle">E-mail</p>
										<p className="infoText">{vCase.responsible.email}</p>
									</div>
									<div>
										<p className="infoTitle">Telefone</p>
										<p className="infoText">{vCase.responsible.phoneNumber || "Não disponível"}</p>
									</div>
									<a href={`https://wa.me/55${vCase.responsible.whatsapp}/`} target="_blank"><img className="wppIcon" src={wppIcon}/></a>
								</div>
							</div>
						</div>
						<div className="caseDescriptionWrapper">
							<p className="infoTitle">Descrição</p>
							<p className="infoText">{vCase.description}</p>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button className="modalCloseButton" onClick={toggleModal}>Fechar</button>
					</Modal.Footer>
				</Modal>
  )
}

export default CaseModal;