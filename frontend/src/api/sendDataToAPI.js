import axios from 'axios';

export const sendDataToAPI = (formData) => {
  // faz uma requisição POST para a API com os dados do formulário
  axios.post('http://sua-api.com.br/form', formData)
    .then((response) => {
      // sucesso na requisição
      console.log(formData);
    })
    .catch((error) => {
      // erro na requisição
      console.error(error);
    });
};
