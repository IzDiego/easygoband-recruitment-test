import type { IProvider } from "@/interfaces/IProvider";

export const getProviders = async (): Promise<IProvider[]> => {
  const url =
    import.meta.env.VITE_API_URL ||
    "https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers/1";

  let response;
  try {
    response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Basic " + (import.meta.env.VITE_API_KEY || 'cJmAc71jah17sgqi1jqaksvaksda='),
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }

  return await response.json();
};
