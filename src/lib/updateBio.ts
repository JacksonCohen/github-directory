import axios from 'axios';

export default (bio: string) => {
  axios
    .patch('/user', {
      bio,
      headers: {
        Authorization: `token 325f7dbf3e9fb05a69523c2414eaccd6ec2e41d0`
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
};
