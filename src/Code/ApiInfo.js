import axios from 'axios';

const API_URL = "https://0081-177-231-135-134.ngrok-free.app/api/user/login";
const data = {
  "email": "ntinang@dmoz.org",
  "password": "nhrSDJyQKVgX"
}


const getData = async () => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export default getData();
