import axios from "axios";

export class ApiService {
  constructor(private apiKey: string) {}

  public async getPrices(coins: string, currencyToConvert: string) {
    try {
      const response = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${coins}&convert=${currencyToConvert}`
      );
      let output = "";

      response.data.map((coin: any) => {
        output += `
        Coin: ${coin.symbol} (${coin.name}) | Price: ${coin.price} | Rank: ${coin.rank}`;
      });

      return output;
    } catch (error) {
      console.error("Error in retriving data from the API");
      console.error(error);
    }
  }
}
