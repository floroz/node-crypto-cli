#!/usr/bin/env node
import { program } from "commander";
import * as dotenv from "dotenv";

const pkg = require("../package.json");

dotenv.config();

program
  .version(pkg.version)
  .command("key", "Manage API key -- https://nomics.com")
  .command("check", "Check Coin Price Info")
  .parse(process.argv);
