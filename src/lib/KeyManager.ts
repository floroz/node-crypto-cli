// const ConfigStore = require("configstore");

class KeyManager {
  private API_KEY = process.env.API_KEY;

  public getApiKey(): string | undefined {
    return this.API_KEY;
  }

  public setApiKey(key: string | undefined): string | undefined {
    this.API_KEY = key;

    return this.API_KEY;
  }
}

export default new KeyManager();
