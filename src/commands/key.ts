import keyManager from "../lib/KeyManager";
import inquirer from "inquirer";
import { isRequired } from "../utils/validation";

class Key {
  public async set() {
    let input: { key: string };
    try {
      input = await inquirer.prompt([
        {
          type: "input",
          name: "key",
          message: "Insert your API_KEY " + "http://nomics.com",
          validate: isRequired,
        },
      ]);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong...Try again.");
    }

    keyManager.setApiKey(input.key);

    const key = input.key;

    return key;
  }

  show() {
    try {
      const key = keyManager.getApiKey();
      console.log("Current API KEY: ", key);
      return key;
    } catch (error) {
      console.log("Error retrieving the API KEY");
      console.error(error.message);
    }
  }

  remove() {
    try {
      const removedKey = keyManager.removeKey();
      console.log("API KEY Removed: ", removedKey);
    } catch (error) {
      console.log("Error deleting the API KEY");
      console.error(error.message);
    }
  }
}

export default new Key();
