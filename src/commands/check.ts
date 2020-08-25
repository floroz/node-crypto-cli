import { ApiService } from "../api";
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

      const apiService = new ApiService(apiKey);

      const output = await apiService.getPrices(
        optionCommands.coin,
        optionCommands.cur
      );
      console.log(output);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Check();
