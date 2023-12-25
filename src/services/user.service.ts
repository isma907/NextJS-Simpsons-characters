import { SimpsonCharacter, searchUserParam } from "@/interfaces";

const baseUrl = "http://localhost:4000/simpsons/filterByObj";

export async function getUsers(
  param?: searchUserParam
): Promise<SimpsonCharacter[]> {
  const itemsPerPage = param?.limit ?? 24;
  const page = param?.page ?? 1;


  let endpointSearch = `?limit=${itemsPerPage}&page=${page}`;
  const apiUrl = `${baseUrl}${endpointSearch}`;
  const search = param?.search;
  const response = await fetch(apiUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: search }),
  });
  return response.json();
}
