import employersArray from "../localData/employers";
const initialState = {
  employers: employersArray,
  positionFilter: [],
  localisationFilter: [],
  namesFilter: [],
  conditionsFilter: [],
  filteredEmployers: [],
  dateFrom: "",
  dateTo: "",
};

export const kadromierzReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POSITION_FILTER": {
      return {
        ...state,
        positionFilter: payload,
      };
    }
    case "SET_LOCALISATION_FILTER": {
      return {
        ...state,
        localisationFilter: payload,
      };
    }
    case "SET_NAMES_FILTER": {
      return {
        ...state,
        namesFilter: payload,
      };
    }
    case "SET_CONDITIONS_FILTER": {
      return {
        ...state,
        conditionsFilter: payload,
      };
    }
    case "SET_FILTERED_EMPLOYERS": {
      return {
        ...state,
        filteredEmployers: filterEmployers(
          state.employers,
          state.positionFilter,
          state.localisationFilter,
          state.namesFilter,
          state.conditionsFilter,
        ),
      };
    }
    case "SET_DATE_FROM": {
      return {
        ...state,
        dateFrom: payload,
      };
    }
    case "SET_DATE_TO": {
      return {
        ...state,
        dateTo: payload,
      };
    }
    default:
      return state;
  }
};
const filterEmployers = (
  employers,
  positionFilter,
  localisationFilter,
  namesFilter,
  conditionsFilter,
) => {
  let filteredArray = [...employers];
  if (positionFilter.length > 0) {
    filteredArray = filteredArray.filter((employ) =>
      positionFilter.some((item) => item === employ.position),
    );
  }

  if (localisationFilter.length > 0) {
    console.log(localisationFilter.length);
    filteredArray = filteredArray.filter((employ) =>
      employ.localisations.some((loc) =>
        localisationFilter.some((locFilter) => loc === locFilter),
      ),
    );
  }

  if (namesFilter.length > 0) {
    console.log(namesFilter);
    filteredArray = filteredArray.filter((employ) =>
      namesFilter.some(
        (filter) => filter === employ.name + " " + employ.surname,
      ),
    );
  }
  if (conditionsFilter.length > 0) {
    filteredArray = filteredArray.filter((employ) =>
      conditionsFilter.some((filter) => employ.employmentCondition === filter),
    );
  }

  return filteredArray;
};
