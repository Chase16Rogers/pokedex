import AllPokemonController from "./Controllers/AllPokemonController.js";

class App {
  allPokemonController = new AllPokemonController()
}

window["app"] = new App();
