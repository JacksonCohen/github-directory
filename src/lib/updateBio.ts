import axios from 'axios';

export default (bio: string, token: string) => {
  axios
    .patch('/user', {
      bio,
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
};
