import React, { useEffect } from "react";

const PetCard = ({ vCase, openModal, toggleModal }) => {

    return(
			<>
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{vCase.title}</h5>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">{vCase.local}</li>
						<li class="list-group-item">{vCase.hourAvailability}</li>
						<li class="list-group-item">{vCase.weekDays.map((weekDay) => {
							return `${weekDay} `
						})}</li>
					</ul>
					<div class="card-body">						
						<button onClick={toggleModal} className="moreInformationButton">+ informações</button>
					</div>
				</div>
			</>
    )
}

export default PetCard;