import axios from "axios";

export const getFamilies = async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "families");
  return response.data;
}

export const setFavorite = async (familyId: number) => {
  await axios.post(process.env.NEXT_PUBLIC_API_URL + `families/${familyId}/favorites`);
}