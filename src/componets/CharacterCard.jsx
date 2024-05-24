import { Link } from "react-router-dom"


function CharacterCard({character}) {
  return (
    <article className="card">
      <Link className="character_card" to={`/detail/${character.id}`}>
      <img className="character_img" src={character.image} alt="" />
      <p className="character_text"> {character.name}</p>
      <p className="character_text"> {character.species}</p>    
      </Link>     
    </article>
  )
}

export default CharacterCard