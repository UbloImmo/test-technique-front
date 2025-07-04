import background1 from "../../../assets/background-01.png";
import background2 from "../../../assets/background-02.png";
import background3 from "../../../assets/background-03.png";
import background4 from "../../../assets/background-04.png";

/**
 * Mock unit list data.
 * @template getUnits {import("../api/units.api.ts").getUnits}
 *
 * **Do not import directly into your component, use {@link getUnits} instead.**
 */
export const units = [
  {
    id: "7247aa97-3a86-4442-a5cb-002994d910d4",
    image: background1,
    reference: "A0001",
    name: "Appartement A1",
    description: "Description du lot 1",
    state: "available",
    buildingName: "A",
    stairsName: "A",
    surface: 68,
    floorPlan: "T3",
    computedRent: {
      rent: 83445,
    },
    address: {
      city: {
        value: "Sartrouville",
      },
      country: {
        value: "FR",
      },
      number: {
        value: "19",
      },
      street: {
        value: "rue Réaumur",
      },
      zip: {
        value: "78500",
      },
    },
  },
  {
    id: "cc47ff3a-b19a-4365-b758-7d24b369ae48",
    image: background2,
    reference: "L0022",
    name: "Appartement A2",
    description: "Description du lot 2",
    state: "unavailable",
    buildingName: "A",
    stairsName: "A",
    surface: 34,
    floorPlan: "T2",
    computedRent: {
      rent: 48000,
    },
    address: {
      city: {
        value: "Sartrouville",
      },
      country: {
        value: "FR",
      },
      number: {
        value: "19",
      },
      street: {
        value: "rue Réaumur",
      },
      zip: {
        value: "78500",
      },
    },
  },
  {
    id: "345e4e2c-a42b-4631-82d7-5706187c4127",
    image: background3,
    reference: "B0001",
    name: "Appartement A3",
    description: "Description du lot 3",
    state: "unavailable",
    buildingName: "A",
    stairsName: "A",
    surface: 52,
    floorPlan: "T2",
    computedRent: {
      rent: 52000,
    },
    address: {
      city: {
        value: "Sartrouville",
      },
      country: {
        value: "FR",
      },
      number: {
        value: "19",
      },
      street: {
        value: "rue Réaumur",
      },
      zip: {
        value: "78500",
      },
    },
  },
  {
    id: "6246a1a9-e47b-4c5f-980c-d050e461bb0a",
    image: background4,
    reference: "L3001",
    name: "Appartement A4",
    description: "Description du lot 4",
    state: "available",
    buildingName: "A",
    stairsName: "A",
    surface: 82,
    floorPlan: "T4",
    computedRent: {
      rent: 120050,
    },
    address: {
      city: {
        value: "Sartrouville",
      },
      country: {
        value: "FR",
      },
      number: {
        value: "19",
      },
      street: {
        value: "rue Réaumur",
      },
      zip: {
        value: "78500",
      },
    },
  },
];
