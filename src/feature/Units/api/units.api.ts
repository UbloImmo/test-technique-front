import { units } from "../data/units.data";

/**
 * Simulates fetching the units from the API.
 *
 * @return {Promise<any>} A promise that resolves to the units.
*
 * @remarks Use this function to fetch the data into your component(s).
 */
export const getUnits = async () => {
  // timeout to simulate API call
  await new Promise((resolve) => {
    setTimeout(resolve, 250);
  });
  return units;
}