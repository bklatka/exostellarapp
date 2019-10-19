import {
  ADD_PLANET_TO_SYSTEM,
  ADD_STAR_TO_SYSTEM,
  ASSIGN_PLANET_TO_ORBIT,
  REMOVE_PLANET_FROM_SYSTEM,
  RESET_CURRENT_SYSTEM,
  UNASSIGN_PLANET_FROM_ORBIG
} from "./currentSystem.actions";

export const initialState = {
  planets: [],
  star: {},
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
    case ADD_STAR_TO_SYSTEM: {
      return { ...state, star: { ...action.payload } };
    }

    case ADD_PLANET_TO_SYSTEM: {
      const planets = state.planets.filter(
        planet => planet.id !== action.payload.id
      );
      return {
        ...state,
        planets: [
          ...planets,
          {
            ...action.payload,
            planetThumbnailUrl: getRandomPlanetThumbnailUrl()
          }
        ]
      };
    }
    case REMOVE_PLANET_FROM_SYSTEM: {
      const planets = state.planets.filter(
        planet => planet.id !== action.payload
      );
      return { ...state, planets };
    }
    case RESET_CURRENT_SYSTEM:
      return initialState;
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
