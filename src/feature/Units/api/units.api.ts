import { units } from "./units.data";
import { delay } from "@ubloimmo/uikit";

/**
 * TODO: La fonction exportée doit être typée pour indiquer à typescript qu'elle retourne une liste d'objets de type `Unit`.
 */

/**
 * Simulates fetching the units from the API.
 *
 * @return {Promise<any>} A promise that resolves to the units.
 *
 * @remarks Use this function to fetch the data into your component(s).
 */
export const getUnits = async () => {
  // timeout to simulate API call
  await delay(250);
  return units;
};
