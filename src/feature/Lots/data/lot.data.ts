import background1 from '../../../assets/background-01.png';
import background2 from '../../../assets/background-02.png';
import background3 from '../../../assets/background-03.png';
import background4 from '../../../assets/background-04.png'

/**
 * Liste des lots à utiliser pour compléter la user story
 */
export const lots = [  
    {
        id: "7247aa97-3a86-4442-a5cb-002994d910d4",
        image: background1,
        reference: 'A0001',
        name: 'Lot 1',
        description: 'Description du lot 1',
        state: "available",
        buildingName: "A",
        stairsName: "A",
        surface: 52,
        computedRent: {
            rent: 80000,
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
            }
        },
    },
    {
        id: "cc47ff3a-b19a-4365-b758-7d24b369ae48",
        image: background2,
        reference: 'L0022',
        name: 'Lot 2',
        description: 'Description du lot 2',
        state: "unavailable",
        buildingName: "A",
        stairsName: "A",
        surface: 52,
        computedRent: {
            rent: 80000,
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
            }
        },
    },
    {
        id: "345e4e2c-a42b-4631-82d7-5706187c4127",
        image: background3,
        reference: 'B0001',
        name: 'Lot 3',
        description: 'Description du lot 3',
        state: "unavailable",
        buildingName: "A",
        stairsName: "A",
        surface: 52,
        computedRent: {
            rent: 80000,
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
            }
        },
    },
    {
        id: "6246a1a9-e47b-4c5f-980c-d050e461bb0a",
        image: background4,
        reference: 'L3001',
        name: 'Lot 4',
        description: 'Description du lot 4',
        state: "available",
        buildingName: "A",
        stairsName: "A",
        surface: 52,
        computedRent: {
            rent: 80000,
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
            }
        },
    }
]