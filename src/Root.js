import React from "react";
import { connect } from "react-redux";
import EmployCard from "./components/EmployCard";
import MainMenu from "./components/MainMenu";
import { StyledEmployerCardsWrapper } from "./components/styledComponents";

const getLocations = (array) => {
  const tempArray = [];
  array.map((employ) => {
    employ.localisations.map((localisation) => tempArray.push(localisation));
  });
  return [...new Set(tempArray)];
};

const getNames = (array) => {
  const names = array.map((employ) => employ.name);
  const surnames = array.map((employ) => employ.surname);

  return names.map((name, index) => name + " " + surnames[index]);
};
const getPosition = (array) => {
  const tempArray = array.map((employ) => employ.position);
  return [...new Set(tempArray)];
};
const getEmploymentCondition = (array) => {
  const tempArray = array.map((employ) => employ.employmentCondition);
  return [...new Set(tempArray)];
};

const Root = ({
  employersArray,
  positionFilter,
  localisationFilter,
  conditionsFilter,
  namesFilter,
  filteredEmployers,
}) => {
  const localisationsArray = getLocations(employersArray);
  const positionsArray = getPosition(employersArray);
  const employmentConditionsArray = getEmploymentCondition(employersArray);
  const namesArray = getNames(employersArray);

  return (
    <div>
      <MainMenu
        positions={positionsArray}
        conditions={employmentConditionsArray}
        names={namesArray}
        localisation={localisationsArray}
      />
      <StyledEmployerCardsWrapper>
        {filteredEmployers.map((employ, index) => (
          <EmployCard
            length={filteredEmployers.length}
            index={index}
            employ={employ}
          />
        ))}
      </StyledEmployerCardsWrapper>
    </div>
  );
};
const mapStateToProps = (state) => ({
  employersArray: state.employers,
  positionFilter: state.positionFilter,
  localisationFilter: state.localisationFilter,
  namesFilter: state.namesFilter,
  conditionsFilter: state.conditionsFilter,
  filteredEmployers: state.filteredEmployers,
});

export default connect(mapStateToProps)(Root);
