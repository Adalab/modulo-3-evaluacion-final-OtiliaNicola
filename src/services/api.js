const getDataFromAPi = () => {//obtenemos los datos de la API
  //API temporal
  //https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-ymorty.json

  //APi correcta
  return fetch('https://rickandmortyapi.com/documentation/#get-all-characters') 
    .then((response) => response.json())
    .then((data) => {
      const newArray = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });
      return newArray;
    })
}
export default getDataFromAPi;