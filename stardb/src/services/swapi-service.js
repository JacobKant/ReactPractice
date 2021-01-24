export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api/';

  async getResource(resUrl) {
    const res = await fetch(`${this._baseUrl}${resUrl}`);
    if (!res.ok) {
      throw new Error('Luke im your father');
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource('people/');
    return res.results.map(this._transformPeople);
  };

  getPeople = async id => {
    const people = await this.getResource(`people/${id}/`);
    return this._transformPeople(people);
  };

  _transformPeople = it => {
    const id = this._extractId(it);
    const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return {
      id: id,
      height: it.height,
      mass: it.mass,
      name: it.name,
      birthYear: it.birth_year,
      imgUrl: imgUrl
    };
  };

  getAllPlanets = async () => {
    const res = await this.getResource('planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  };

  _extractId = it => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = it.url.match(idRegExp)[1];
    return id;
  };

  _transformPlanet = it => {
    const id = this._extractId(it);
    const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return {
      id: this._extractId(it),
      name: it.name,
      population: it.population,
      rotationPeriod: it.rotation_period,
      diameter: it.diameter,
      imgUrl: imgUrl
    };
  };

  getAllStarships = async () => {
    const res = await this.getResource('starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const res = await this.getResource(`starships/${id}/`);
    return this._transformStarship(res);
  };

  _transformStarship = it => {
    const id = this._extractId(it);
    const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    return {
      id: id,
      name: it.name,
      model: it.model,
      maxSpeed: it.max_atmosphering_speed,
      imgUrl: imgUrl
    };
  };
}
