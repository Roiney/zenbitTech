import axios from 'axios';

export const sendDataToAPI = async (formData) => {
  // faz uma requisição POST para a API com os dados do formulário
   await axios.post('http://localhost:3001/forms', formData)
    .then((response) => {
      // sucesso na requisição
      console.log(response);
      return response;
    })
    .catch((error) => {
      // erro na requisição
      return error;
    });
};
