import request from 'superagent';

const casesService = {

  async findAll() {
    const response = await request
      .get("http://localhost:8080/api/cases");
    const pets = response.body;

    return pets;
  },

  async createCase(vCase) {
    const response = await request
      .post("http://localhost:8080/api/cases", )
      .send(vCase)
    const createdVCase = response.body;
    
    return createdVCase;
  },
}
export default casesService;