import axios, { AxiosInstance } from "axios";

export class ApiService {
  constructor(private axiosClient: AxiosInstance) {}

  public async getPrices(
    coins: string,
    currencyToConvert: string,
    apiKey: string
  ) {
    try {
      const response = await this.axiosClient.get(
        `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${coins}&convert=${currencyToConvert}`
      );
      return response.data;
    } catch (error) {
      console.error("Error in retriving data from the API");
      console.error(error);
    }
  }
}

export default new ApiService(axios);
