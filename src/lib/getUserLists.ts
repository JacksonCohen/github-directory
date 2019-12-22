import axios from 'axios';
import { useUserList } from '../hooks';

const { setUserList } = useUserList('followers');

export default (criteria: string = 'followers'): Promise<any> => {
  return axios(`https://api.github.com/user/${criteria}`, {
    method: 'GET',
    headers: {
      Authorization: `token 325f7dbf3e9fb05a69523c2414eaccd6ec2e41d0`
    }
  }).then(response => console.log(response));
};
