import axios from 'axios';

const token = sessionStorage.getItem('access-token');

export default (bio: string) => {
  axios
    .patch('https://api.github.com/user', {
      bio,
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
};
