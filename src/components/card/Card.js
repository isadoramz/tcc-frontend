import "./styles.css";

const Card = ({ pet }) => {
    return(
			<div className="card">
          <img src={pet.img} className="card-img-top" alt="pet profile picture"/>
          <div className="card-body">
              <h5 className="card-title">{pet.name}</h5>
              <button href="#" className="petInformation">+ sobre mim</button>
          </div>
      </div>
    )
}

export default Card;