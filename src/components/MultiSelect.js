import { set } from "date-fns";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  SetLocalisationFilter as SetLocalisationFilterAction,
  SetPositionFilter as SetPositionFilterAction,
  SetNamesFilter as SetNamesFilterAction,
  SetConditionsFilter as SetConditionsFilterAction,
} from "../actions";
import "../animations/cssTransitionClasses.css";
import searchIcon from "../assets/001-search.png";
import MultiSelectListItem from "./MultiSelectListItem";
import {
  SelectMainContainer,
  StyledInputMultiSelectSearch,
  StyledLabel,
  StyledMultiSelectLabel,
  StyledSelectWrapper,
  StyledMultiSelectItem,
  StyledMultiSelectList,
  StyledSelectMainContainerTextWrapper,
  StyledOpenMultiSelectWrapper,
  StyledSearchIcon,
  StyledSearchIconWrapper,
} from "./styledComponents";

const MultiSelect = ({
  label,
  values,
  allLabel,
  setFilter,
  type,
  setPositionFilter,
  setLocalisationFilter,
  setNamesFilter,
  setConditionsFilter,
}) => {
  const [selectValue, setSelectValue] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [checkedArray, setCheckedArray] = useState(
    values.map((value) => false),
  );
  const updateFilter = (value) => {
    switch (type) {
      default: {
        break;
      }
      case "position": {
        setPositionFilter(value);
        break;
      }
      case "localisation": {
        setLocalisationFilter(value);
        break;
      }
      case "names": {
        setNamesFilter(value);
        break;
      }
      case "conditions": {
        setConditionsFilter(value);
        break;
      }
    }
  };
  const toggleOption = (value) => {
    const tempIndex = selectValue.indexOf(value);

    if (tempIndex !== -1) {
      const tempArray = selectValue.filter((item) => item !== value);
      setSelectValue(tempArray);
      updateFilter(tempArray);
    } else {
      const tempArray = [...selectValue, value];
      setSelectValue(tempArray);
      updateFilter(tempArray);
    }
  };
  const selectAll = () => {
    if (!allSelected) {
      const tempArray = [...values];
      setCheckedArray(checkedArray.map((value) => true));
      setSelectValue(tempArray);
      updateFilter(tempArray);
    } else {
      setCheckedArray(checkedArray.map((value) => false));
      setSelectValue([]);
      updateFilter([]);
    }

    setAllSelected(!allSelected);
  };
  const toggleCheckbox = (value, chechBoxindex) => {
    toggleOption(value);
    if (allSelected) {
      setAllSelected(false);
    }
    setCheckedArray(
      checkedArray.map((value, index) =>
        index === chechBoxindex ? !value : value,
      ),
    );
  };
  return (
    <StyledSelectWrapper>
      <SelectMainContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <StyledMultiSelectLabel>{label}</StyledMultiSelectLabel>

        <StyledSelectMainContainerTextWrapper>
          {selectValue.map((value, index) => {
            if (index === 0) {
              return value;
            }
            if (index === 1) {
              return ", " + value;
            }
          })}
          {selectValue.length > 2 ? ` + ${selectValue.length - 2}` : null}
        </StyledSelectMainContainerTextWrapper>
      </SelectMainContainer>
      {isOpen ? (
        <CSSTransition
          in={isOpen}
          appear
          classNames="menu"
          unmountOnExit
          mountOnEnter
        >
          <StyledOpenMultiSelectWrapper>
            <StyledMultiSelectItem>
              <StyledSearchIconWrapper>
                <StyledSearchIcon src={searchIcon} alt="searchIcon" />
              </StyledSearchIconWrapper>
              <StyledInputMultiSelectSearch
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Szukaj..."
              />
            </StyledMultiSelectItem>
            <StyledLabel>
              <MultiSelectListItem
                value={allLabel}
                toggle={selectAll}
                isChecked={allSelected}
              />
            </StyledLabel>
            <StyledMultiSelectList>
              {values.map((value, index) =>
                searchValue === "" ||
                value.toLowerCase().includes(searchValue.toLowerCase()) ? (
                  <CSSTransition
                    in={isOpen}
                    classNames="fade"
                    appear
                    timeout={100 + 50 * index}
                  >
                    <MultiSelectListItem
                      value={value}
                      index={index}
                      isChecked={checkedArray[index]}
                      toggle={toggleCheckbox}
                    />
                  </CSSTransition>
                ) : null,
              )}
            </StyledMultiSelectList>
          </StyledOpenMultiSelectWrapper>
        </CSSTransition>
      ) : null}
    </StyledSelectWrapper>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setPositionFilter: (value) => dispatch(SetPositionFilterAction(value)),
  setLocalisationFilter: (value) =>
    dispatch(SetLocalisationFilterAction(value)),
  setNamesFilter: (value) => dispatch(SetNamesFilterAction(value)),
  setConditionsFilter: (value) => dispatch(SetConditionsFilterAction(value)),
});
export default connect(null, mapDispatchToProps)(MultiSelect);
