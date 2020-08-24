import apiService from "../api";
import keyManager from "../lib/KeyManager";

type PriceOptionCommands = {
  coin: string;
  cur: string;
};

class Check {
  public async price(optionCommands: PriceOptionCommands) {
    try {
      const apiKey = keyManager.getApiKey();

      if (!apiKey) {
        throw new Error("No API Key found.");
      }
      const data = await apiService.getPrices(
        optionCommands.coin,
        optionCommands.cur,
        apiKey
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Check();
