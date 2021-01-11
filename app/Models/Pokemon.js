


export default class Pokemon {
  constructor({ name, img, description, weight, height, types, sprites, id }) {
    this.name = name
    this.img = img || sprites.front_default
    this.description = description
    this.weight = weight
    this.height = height
    this.types = types
    this.id = id
  }

  get Template() {
    return /*html*/`
    <h2>${this.name}</h2>
    <img src="${this.img}" alt="${this.name}" class="img-fluid">
    <h5>Weight: ${this.weight} Height: ${this.height}</h5>
    <p>${this.description}</p>
    <button class="btn btn-outline-dark" onclick="app.allPokemonController.party()">Add to Party</button>
  `
  }

  get Spritestemplate() {
    return `
    <div class="col-md-2 col-sm-4 col-xs-12 border-top border-bottom border-dark">
    <div class="d-flex flex-column justify-content-center">
    <p class="mb-0 text-center">${this.name}</p>
    <img onclick="app.allPokemonController.drawPokeInfo('${this.name}')" src="${this.img}" alt="${this.name}" class="img-fluid">
    </div>
    </div>
    `
  }

}