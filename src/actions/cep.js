import { api } from "./api";

export const getCEP = async (cep) => {
  try {
    const { data } = await api.get(cep);
    return data;
  } catch (error) {
    console.log(error);
  }
};
