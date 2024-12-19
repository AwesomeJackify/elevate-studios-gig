import { JSDOM } from "jsdom";

/**
 * Dynamic HTML Parser by ID
 * @param {string} htmlString - The HTML string to parse.
 * @param {Array<string>} ids - An array of IDs to extract from the HTML.
 * @returns {Object} - An object containing the extracted elements by ID.
 */
export default function parseHTMLById(htmlString: string, ids: string[]) {
  // Use JSDOM in Node.js (server-side)
  const { document } = new JSDOM(htmlString).window;

  // Object to store the extracted elements
  const extractedElements: { [key: string]: any } = {};

  ids.forEach((id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      extractedElements[id] = {
        html: element.outerHTML,
        text: element.textContent,
        tagName: element.tagName,
        attributes: Array.from(element.attributes).reduce((acc: { [key: string]: string }, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {}),
      };
    } else {
      extractedElements[id] = null; // If no element with this ID exists
    }
  });

  return extractedElements;
}
