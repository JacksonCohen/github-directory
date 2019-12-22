import axios from 'axios';

export default async (): Promise<any> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  try {
    const { data } = await axios({
      url: `http://localhost:11111/getAuthToken`,
      method: 'POST',
      data: JSON.stringify({ code }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // retrieve access token from success string and store in session storage
    sessionStorage.setItem('access-token', data.slice(13, -25));
  } catch (error) {
    console.error(`Error Authenticating on Client: ${error}`);
  }
};
