import axios from 'axios';

const fetchPokemon = async()=>{
  try{
    const resposta = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/`,
      {
        headers
      }
    )
  }
}



function Gen1() {
  return <div>teste</div>;
}

export default Gen1;
