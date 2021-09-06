import request from 'superagent';

const petsService = {

  async findAll() {
    const response = await request
      .get("http://localhost:8080/api/pets");
    const pets = response.body;

    return pets;
  }
}
export default petsService;