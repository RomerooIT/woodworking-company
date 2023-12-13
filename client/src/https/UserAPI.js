import { $authhost, $host } from "./index";

export const registration = async (email, name, surname, password) => {
  const response = await $host.post('api/auth/sing-up', { email, password, name, surname });
  return response.data;
};

export const login = async (email, password) => {
  const response = await $host.post('api/auth/sing-in', { email, password });
  return response.data;
};
    
export const refresh = async () => {
  const response = await $authhost.post('api/auth/refresh');
  return response.data;
};