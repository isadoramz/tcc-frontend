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
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{vCase.title}</h5>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><FontAwesomeIcon className="icon" icon={faLocationArrow} />{vCase.local}</li>
						<li class="list-group-item"><FontAwesomeIcon className="icon" icon={faClock} />{vCase.hourAvailability}</li>
						<li class="list-group-item"><FontAwesomeIcon className="icon" icon={faCalendarAlt} />{vCase.weekDays.map((weekDay) => {
							if((vCase.weekDays.length - 1) === vCase.weekDays.indexOf(weekDay)) {
								return ` ${weekDay}`
							} else {
								return ` ${weekDay},`
							}
						})}</li>
					</ul>
					<div class="card-body">						
						<button onClick={toggleModal} className="moreInformationButton">+ informações</button>
					</div>
				</div>
				<CaseModal openModal={openModal} toggleModal={toggleModal} vCase={vCase} />
			</>
    )
}

export default CaseCard;