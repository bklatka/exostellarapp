import {
  ADD_PLANET_TO_SYSTEM,
  ADD_STAR_TO_SYSTEM,
  ASSIGN_PLANET_TO_ORBIT,
  UNASSIGN_PLANET_FROM_ORBIG
} from "./currentSystem.actions";

const mockPlanets = [
  {
    id: 1,
    name: "Earth",
    mass: 123,
    type: "Some earth tyupe",
    planetThumbnailUrl:
      "https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg"
  },
  {
    id: 2,
    name: "Mars",
    mass: 3423,
    type: "Some earth tyupe",
    planetThumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
  },
  {
    id: 3,
    name: "Venus",
    mass: 534,
    type: "Some earth tyupe",
    planetThumbnailUrl: "https://en.es-static.us/upl/2019/09/Venus-dayside.png"
  }
];

const initialState = {
  planets: [],
  star: null,
  orbits: [4, 8, 16, 32]
};

export const currentSystemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ASSIGN_PLANET_TO_ORBIT: {
      const { planet, orbitSize } = action.payload;
      const planets = [...state.planets].map(p => {
        if (p.id === planet.id) {
          return {
            ...planet,
            orbit: orbitSize
          };
        }
        return p;
      });
      return { ...state, planets };
    }

    case UNASSIGN_PLANET_FROM_ORBIG: {
      const planet = action.payload;
      const planets = [...state.planets].map(p => {
        if (p.id === planet.id) {
          return {
            ...planet,
            orbit: null
          };
        }
        return p;
      });
      return { ...state, planets };
    }
    case ADD_STAR_TO_SYSTEM:
      return { ...state, star: { ...action.payload } };

    case ADD_PLANET_TO_SYSTEM:
      return {
        ...state,
        planets: [
          ...state.planets,
          {
            ...action.payload,
            planetThumbnailUrl: getRandomPlanetThumbnailUrl()
          }
        ]
      };
    default:
      return state;
  }
};

const PlanetThumbnailUrls = [
  "https://en.es-static.us/upl/2019/09/Venus-dayside.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
  "https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg"
];

const getRandomPlanetThumbnailUrl = () =>
  PlanetThumbnailUrls[Math.floor(Math.random() * PlanetThumbnailUrls.length)];
