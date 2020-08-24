import { program } from "commander";
import check from "./commands/check";

program
  .command("price")
  .option(
    "--coin <type>",
    "Add specific coin types in CSV format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change the currency", "USD")
  .description("Check price of coins")
  // @ts-ignore
  .action(check.price);

program.parse(process.argv);
