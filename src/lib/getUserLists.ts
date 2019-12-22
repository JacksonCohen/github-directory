import axios from 'axios';

const token = sessionStorage.getItem('access-token');

export default (criteria: string = 'followers'): Promise<any> => {
  return axios(`https://api.github.com/user/${criteria}`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => console.log(response));
};
