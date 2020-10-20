import React, { useState } from "react";
import {
  FlexWrapper,
  StyledButton,
  StyledDateInputWrapper,
  StyledDatePickersWrapper,
  StyledDateTextWrapper,
  StyledMainMenuHeader,
  StyledMainMenuWrapper,
  StyledMultiSelectLabel,
  StyledSelectWrapper,
} from "./styledComponents";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MultiSelect from "./MultiSelect";
import { connect } from "react-redux";
import {
  setDateFrom as setDateFromAction,
  setDateTo as setDateToAction,
  setFilteredEmployers,
} from "../actions";
import calendarIcon from "../assets/001-calendar.png";
const MainMenu = ({
  localisation,
  names,
  positions,
  conditions,
  filterEmployers,
  dispatchSetDateFrom,
  dispatchSetDateTo,
}) => {
  const [isDateFromPickerOpen, setIsDateFromPickerOpen] = useState(false);
  const [isDateToPickerOpen, setIsDateToPickerOpen] = useState(false);

  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  return (
    <>
      <StyledMainMenuWrapper>
        <StyledMainMenuHeader>Wybierz pracowników</StyledMainMenuHeader>
        <StyledDatePickersWrapper>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled
              open={isDateFromPickerOpen}
              label="Od"
              title="od"
              onClose={() => {
                setIsDateFromPickerOpen(false);
                setIsDateToPickerOpen(true);
              }}
              onChange={(date) => {
                setDateFrom(new Date(date));
                dispatchSetDateFrom(date);
              }}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled
              open={isDateToPickerOpen}
              label="Do"
              onClose={() => setIsDateToPickerOpen(false)}
              onChange={(date) => {
                setDateTo(date);
                dispatchSetDateTo(date);
              }}
            />
          </MuiPickersUtilsProvider>
        </StyledDatePickersWrapper>

        <StyledDateInputWrapper onClick={() => setIsDateFromPickerOpen(true)}>
          <FlexWrapper>
            <img
              width="20px"
              height="20px;"
              src={calendarIcon}
              alt="calendar"
            />

            <StyledDateTextWrapper>
              <StyledMultiSelectLabel>Okres</StyledMultiSelectLabel>
              <div>
                {dateFrom
                  ? dateFrom.getDate() + "." + dateFrom.getMonth()
                  : null}
                -{dateTo ? dateTo.getDate() + "." + dateTo.getMonth() : null}
              </div>
            </StyledDateTextWrapper>
          </FlexWrapper>
        </StyledDateInputWrapper>
        <MultiSelect
          values={positions}
          allLabel={"Wszystkie"}
          label={"Stanowiska"}
          type={"position"}
        />
        <MultiSelect
          type={"localisation"}
          values={localisation}
          allLabel={"Wszystkie"}
          label={"Lokalizacje"}
        />
        <MultiSelect
          type={"names"}
          values={names}
          allLabel={"Wszyscy"}
          label={"Pracownicy"}
        />
        <MultiSelect
          type={"conditions"}
          values={conditions}
          allLabel={"Wszystkie"}
          label={"Warunki zatrudnienia"}
        />
        <StyledButton onClick={filterEmployers}>WYŚWIETL</StyledButton>
      </StyledMainMenuWrapper>
    </>
  );
};
const mapStateToProps = (state) => ({
  positionFilter: state.positionFilter,
  localisationFilter: state.localisationFilter,
  namesFilter: state.namesFilter,
  conditionsFilter: state.conditionsFilter,
});
const mapDispatchToProps = (dispatch) => ({
  filterEmployers: () => dispatch(setFilteredEmployers()),
  dispatchSetDateFrom: (date) => dispatch(setDateFromAction(date)),
  dispatchSetDateTo: (date) => dispatch(setDateToAction(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
