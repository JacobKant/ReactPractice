export default class SwapiService {
  _baseUrl = 'https://swapi.co/api/';

  async getResource(resUrl) {
    const res = await fetch(`${this._baseUrl}${resUrl}`);
    if (!res.ok) {
      throw new Error('Luke im your father');
    }
    return await res.json();
  }

  async getPeople(id) {
    return await this.getResource(`people/${id}/`);
  }

  async getAllPeople() {
    const res = await this.getResource('people/');
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet =  await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  _extractId(it) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = it.url.match(idRegExp)[1];
    return id;
  }

  _transformPlanet(it) {
    return {
      id: this._extractId(it),
      name: it.name,
      population: it.population,
      rotationPeriod: it.rotation_period,
      diameter: it.diameter
    };
  }

  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res.results;
  }

  async getStarship(id) {
    return await this.getResource(`starships/${id}/`);
  }
}
