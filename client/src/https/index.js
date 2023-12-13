import axios from "axios";

const $host = axios.create({
  baseURL: 'https://127.0.0.1:7891/'
});

const $authhost = axios.create({
  baseURL: 'https://127.0.0.1:7891/'
});

const authInterceptor = config => 
{
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authhost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authhost
};