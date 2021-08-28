import request from 'superagent';

const petsService = {

  async findAll() {
    const response = await request
      .get("http://localhost:8080/api/pets");
    console.log(response.body)
    const pets = response.body;

    return pets;
  }
}
export default petsService;