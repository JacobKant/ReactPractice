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
    return res.results;
  }

  async getPlanet(id) {
    return await this.getResource(`planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res.results;
  }

  async getStarship(id) {
    return await this.getResource(`starships/${id}/`);
  }
}
