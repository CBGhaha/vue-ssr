import axios from 'axios';
export default function request(url,params,method='GET'){
  return axios({
    method:method.toLocaleUpperCase(),
    url,
    params
  })
}
