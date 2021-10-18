import fs from "fs";
import path from "path";

import { encryptMessage } from "./functions/encryptMessage.js";

const inputFileName = "input.json";

if (!fs.existsSync(inputFileName))
  throw new Error(
    `Input file not found at "${process.cwd()}/${inputFileName}"`
  );

const rawInput = fs.readFileSync("input.json").toString();

const serializedInput = JSON.parse(rawInput);

serializedInput.forEach(({ message, linesCount }) => {
  const encryptedMessage = encryptMessage(message, linesCount);

  console.log({ message, encryptedMessage });
});
