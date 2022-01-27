import axios from 'axios'

export default {

  async getProducts() {
    let products = await axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json')
      .then(response => {
        return response.data;
      });

    return products;
  }

}