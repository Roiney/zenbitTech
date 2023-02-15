import axios from 'axios';

export const sendDataToAPI = (formData) => {
  // faz uma requisição POST para a API com os dados do formulário
  axios.post('http://localhost:3001/forms', formData)
    .then((response) => {
      // sucesso na requisição
      console.log(response);
    })
    .catch((error) => {
      // erro na requisição
      console.error(error);
    });
};
