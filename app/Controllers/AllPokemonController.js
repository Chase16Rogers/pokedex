import { ProxyState } from "../AppState.js";
import { allPokemonService } from "../Services/AllPokemonService.js";
import { sandslashApi } from "../Services/AxiosService.js";

function _drawPokemon() {
  let template = ""
  ProxyState.pokemon.forEach(p => template += p.Spritestemplate)
  document.getElementById("allPokemon").innerHTML = template
}

function _drawPokeParty() {
  let template = ""
  ProxyState.myPokemon.forEach(p => template += p.Spritestemplate)
  document.getElementById("myPokemon").innerHTML = template
}


export default class AllPokemonController {
  constructor() {
    allPokemonService.getAllPokemon()
    ProxyState.on("pokemon", _drawPokemon)
    ProxyState.on("rawPokemon", allPokemonService.disableBtns)
    ProxyState.on("myPokemon", _drawPokeParty)
    _drawPokeParty()
    _drawPokemon()
  }
  drawPokeInfo(name) {
    let poke = ProxyState.pokemon.findIndex(p => p.name == name)
    document.getElementById("activePokemon").innerHTML = ProxyState.pokemon[poke].Template
    ProxyState.activePokemon = ProxyState.pokemon[poke]
    console.log(ProxyState.activePokemon)
  }
  nextList(direct) {
    allPokemonService.nextList(direct)
  }

  async party() {
    let pokePal = ProxyState.activePokemon
    ProxyState.myPokemon = [...ProxyState.myPokemon, pokePal]
    let res = await sandslashApi.post("", pokePal)
    console.log(res.data)
  }

  getParty() {

  }

}