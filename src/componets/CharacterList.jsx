import CharacterCard from "./CharacterCard";


function CharacterList({characters}) {
  
  const html = characters.map((character)=> {
  return(
  <CharacterCard key={character.id} character={character}/>
  );
  });


  return (
    <div className="list">
      {html}
    </div>
  )
}

export default CharacterList