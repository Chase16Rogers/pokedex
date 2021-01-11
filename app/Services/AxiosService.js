

export const pokeApi = axios.create({
  baseURL: " https://pokeapi.co/api/v2/pokemon?limit=30"
})

export const sandslashApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/chase/pokemon"
})