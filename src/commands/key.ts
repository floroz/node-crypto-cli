import keyManager from "../lib/KeyManager";

class Key {
  constructor(private keyManagerInstance: typeof keyManager) {}

  set(...args: any[]) {
    const [, , key] = args;
    this.keyManagerInstance.setApiKey(key);
    return this.keyManagerInstance.getApiKey();
  }

  show() {
    return this.keyManagerInstance.getApiKey();
  }

  remove() {
    this.keyManagerInstance.setApiKey(undefined);
    return this.keyManagerInstance.getApiKey();
  }
}

export default new Key(keyManager);
