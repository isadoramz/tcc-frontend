import React from "react";
import CaseModal from "./CaseModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const CaseCard = ({vCase}) => {
	const [openModal, setOpenModal] = React.useState(false);

	const toggleModal = () => {
			setOpenModal(!openModal);
	}
    return(
			<>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{vCase.title}</h5>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item"><FontAwesomeIcon className="icon" icon={faLocationArrow} />{vCase.local}</li>
						<li className="list-group-item"><FontAwesomeIcon className="icon" icon={faClock} />{vCase.hourAvailability}</li>
					</ul>
					<div className="card-body">						
						<button onClick={toggleModal} className="moreInformationButton">+ informações</button>
					</div>
				</div>
				<CaseModal openModal={openModal} toggleModal={toggleModal} vCase={vCase} />
			</>
    )
}

export default CaseCard;