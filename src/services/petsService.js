import createPalette from '@material-ui/core/styles/createPalette';
import request from 'superagent';

const petsService = {

  async findAll() {
    const response = await request
      .get("http://localhost:8080/api/pets");
    const pets = response.body;

    return pets;
  },

  async createPet(pet) {
    const response = await request
      .post("http://localhost:8080/api/pets", )
      .send(pet)
    const createdPet = response.body;
    
    return createdPet;
  },
}
export default petsService;