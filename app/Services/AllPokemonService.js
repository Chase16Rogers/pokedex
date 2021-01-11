import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";


class AllPokemonService {
  nextList(direct) {
    let right = ProxyState.rawPokemon.next
    let left = ProxyState.rawPokemon.previous
    ProxyState.rawPokemon = []
    ProxyState.pokemon = []
    if (direct == "next") {
      this.getAllPokemon(right)
    } else {
      this.getAllPokemon(left)
    }
  }

  async getAllPokemon(url) {
    let res = await pokeApi.get(`${url}`)
    ProxyState.allPokemon = res.data.results
    ProxyState.rawPokemon = res.data
    console.log(ProxyState.rawPokemon.next)
    this.getPokemon()
  }

  getPokemon() {
    let pokemons = ProxyState.allPokemon
    pokemons.map(async p => {
      let res = await pokeApi.get(p.url)
      let newPoke = new Pokemon(res.data)
      ProxyState.pokemon = [...ProxyState.pokemon, newPoke]
    }
    )
  }

  disableBtns() {
    if (ProxyState.rawPokemon.next == null) {
      document.getElementById("next").disabled = true
    } else { document.getElementById("next").disabled = false }
    if (ProxyState.rawPokemon.previous == null) {
      document.getElementById("previous").disabled = true
    } else {
      document.getElementById("previous").disabled = false
    }
  }

}


export const allPokemonService = new AllPokemonService()




// switch (direct) {
  //   case "next":
  //     offset += 30
  //     break;
  //   case "previous":
  //     offset -= 30
  //     break;
  //   default:
  //     offset = 0
  // }

  // let offset = 0
    // if (offset < 30) {
    //   offset = 0
    //   document.getElementById("previous").disabled = true
    //   document.getElementById("next").disabled = false
    // } else if (offset > 1088) {
    //   document.getElementById("next").disabled = true
    //   document.getElementById("previous").disabled = false
    // } else {
    //   document.getElementById("next").disabled = false
    //   document.getElementById("previous").disabled = false
    // }
    // ProxyState.pokemon = []
    // this.getAllPokemon(`${offset}`)

    // direct == "next" ? this.getAllPokemon(ProxyState.rawPokemon.next) : this.getAllPokemon(ProxyState.rawPokemon.previous)