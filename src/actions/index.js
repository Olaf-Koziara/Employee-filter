export const SetPositionFilter = (value) => {
  return {
    type: "SET_POSITION_FILTER",
    payload: value,
  };
};
export const SetLocalisationFilter = (value) => {
  return {
    type: "SET_LOCALISATION_FILTER",
    payload: value,
  };
};
export const SetNamesFilter = (value) => {
  return {
    type: "SET_NAMES_FILTER",
    payload: value,
  };
};
export const SetConditionsFilter = (value) => {
  return {
    type: "SET_CONDITIONS_FILTER",
    payload: value,
  };
};
export const setFilteredEmployers = () => {
  return {
    type: "SET_FILTERED_EMPLOYERS",
  };
};
export const setDateFrom = (date) => {
  return {
    type: "SET_DATE_FROM",
    payload: date,
  };
};
export const setDateTo = (date) => {
  return {
    type: "SET_DATE_TO",
    payload: date,
  };
};
