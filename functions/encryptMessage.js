import { AlternateCounter } from "../classes/AlternateCounter.js";

/**
 * Receives a message and encrypt it using the given lines count.
 *
 * @param {string} message Original message
 * @param {number} linesCount Number of lines to apply the cryptography
 * @returns {string} Encrypted message
 *
 * Its logic is based on splitting message into different lines
 * based on given lines count, as the following:
 *
 * => ['A', 'B', 'C', 'D', 'E']
 *
 * ['A', 'E'],
 * ['B', 'D', 'F'],
 * ['C'],
 *
 * => ['A', 'E', 'B', 'D', 'F', 'C']
 */
function encryptMessage(message, linesCount) {
  const alternateCounter = new AlternateCounter(1, linesCount);
  const messageArray = message.split("");

  const keyPrefix = "line_";
  const mappedObject = {};

  messageArray.forEach((character) => {
    const key = `${keyPrefix}${alternateCounter.counter}`;

    if (!mappedObject[key]) mappedObject[key] = [];

    mappedObject[key].push(character);

    alternateCounter.setNextCounter();
  });

  const encryptedMessage = Object.values(mappedObject).reduce(
    (accumulator, next) => `${accumulator}${next.join("")}`,
    ""
  );

  return encryptedMessage;
}

export { encryptMessage };
