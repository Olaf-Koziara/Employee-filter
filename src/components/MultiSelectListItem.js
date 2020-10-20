import React from "react";
import {
  StyledChechboxContainer,
  StyledCheckboxSpan,
  StyledLabel,
  StyledMultiSelectItem,
  StyledMultiSelectItemTextWrapper,
  StyledStyledMultiSelectListItem,
} from "./styledComponents";

const MultiSelectListItem = ({ isChecked, value, toggle, index }) => {
  return (
    <StyledStyledMultiSelectListItem>
      <StyledLabel>
        <StyledMultiSelectItem>
          <StyledChechboxContainer>
            <StyledCheckboxSpan class="checkbox__control" checked={isChecked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                color="orange"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M1.73 12.91l6.37 6.37L22.79 4.59"
                />
              </svg>
            </StyledCheckboxSpan>
          </StyledChechboxContainer>
          <StyledMultiSelectItemTextWrapper>
            {value}
          </StyledMultiSelectItemTextWrapper>
          <input
            type="checkbox"
            onChange={() => {
              toggle(value, index);
            }}
            name="checkbox"
            value={value}
          />
        </StyledMultiSelectItem>
      </StyledLabel>
    </StyledStyledMultiSelectListItem>
  );
};

export default MultiSelectListItem;
