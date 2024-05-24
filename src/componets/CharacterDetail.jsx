import { Link, useParams } from "react-router-dom";

function CharacterDetail({getInfo}) {

  const {id} = useParams();
  const idNumber = parseInt(id);
  const detail = getInfo(idNumber);

  return detail ? (
    
    <div className="card_detail">
      <Link to="/">
        <button className="card_btn">Volver</button>
      </Link>
      <article className="">
        <img className="card_imge"  src={detail.image} alt={detail.image} />
        <div>
          <p className="card_text">{detail.name}</p>
          <p className="card_text">Estado: {detail.status}</p>
          <p className="card_text">Especie: {detail.species}</p>
          <p className="card_text">Planeta de origen: {detail.origin}</p>
          <p className="card_text">Episodios: {detail.episode}</p>
        </div>
      </article>
    </div>
  ) : (
    <p className="notfound">No encontrado</p>
  );
}

export default CharacterDetail;
