import ConfigStore from "configstore";
const pkg = require("../../package.json");

class KeyManager {
  constructor(
    private configStore = new ConfigStore(pkg.name),
    private API_KEY = process.env.API_KEY
  ) {
    this.configStore.set("API_KEY", this.API_KEY);
  }

  public getApiKey(): string | undefined {
    const key = this.getKeyFromConfigStore();

    if (!key) {
      this.handleGetKeyError();
    }

    return key;
  }

  public setApiKey(key: string) {
    this.configStore.set("API_KEY", key);

    const retrievedKey = this.getKeyFromConfigStore();

    if (!retrievedKey) {
      this.handleGetKeyError();
    }

    return retrievedKey;
  }

  public removeKey() {
    const retrievedKey = this.getKeyFromConfigStore();

    if (!retrievedKey) {
      this.handleGetKeyError();
    }

    this.configStore.set("API_KEY", undefined);

    return retrievedKey;
  }

  private getKeyFromConfigStore() {
    const retrievedKey: string | undefined = this.configStore.get("API_KEY");

    return retrievedKey;
  }

  private handleGetKeyError() {
    throw new Error("No API Key -- Get a key at https://nomics.com");
  }
}

export default new KeyManager();
