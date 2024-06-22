import { apiConfig } from "./api-config.js";

export async function loyaltyCardFetch(id) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    alert("Cliente não encontrado. Insira um ID válido!");
    console.log(error);
  }
}
