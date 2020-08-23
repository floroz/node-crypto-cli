import { program } from "commander";
import key from "./commands/key";

program
  .command("set")
  .description("Set API Key -- Get at https://nomics.com")
  // @ts-ignore
  .action(key.set);
//@ts-ignore
program.command("show").description("Show API Key").action(key.show);
//@ts-ignore
program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
