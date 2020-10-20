import styled, { css } from "styled-components";
export const StyledMainMenuWrapper = styled.div`
  margin: auto;

  width: 400px;
  height: 500px;
  box-shadow: 2px -1px 73px -13px rgba(135, 135, 135, 1);
`;
export const StyledMainMenuHeader = styled.h3`
  padding: 20px 25px;
`;
export const StyledDatePickersWrapper = styled.div`
  display: none;
  padding: 5px 10px;
  margin-bottom: 25px;
`;

export const StyledDateInputWrapper = styled.div`
  border-bottom: 0.4px solid gray;
  width: 40%;
  margin-right: auto;
  margin-left: 20px;
`;
export const StyledDateTextWrapper = styled.div`
  margin-left: 10px;
`;
export const StyledSelectWrapper = styled.div`
  input {
    font-size: 16px;
  }
  width: 90%;
  margin: auto;
  margin-bottom: 25px;
`;
export const StyledLabel = styled.label`
  display: flex;
  user-select: none;
  border: 0;

  outline: 0;
`;
export const StyledInputMultiSelectSearch = styled.input`
  background-color: transparent;

  width: 100% !important;
  opacity: 1 !important;
  height: 36px !important;

  padding: 4px;
  outline: none;
`;
export const StyledSearchIcon = styled.img`
  transform: rotate(90deg);
  width: 22px;
`;
export const StyledSearchIconWrapper = styled.div`
  margin: auto 0px auto 5px;
`;
export const StyledMultiSelectItem = styled.div`
  background-color: transparent;

  border: 1px solid rgba(200, 200, 200, 0.3);
  display: flex;
  width: 100%;
  height: 36px;
  font-size: 15px;
  outline: none;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
export const StyledMultiSelectItemTextWrapper = styled.div`
  margin: auto 2px auto 2px;
  color: rgba(100, 100, 100, 0.7);
`;
export const SelectMainContainer = styled.div`
  border: 0;
  border-bottom: ${({ isOpen }) => (isOpen ? "" : "0.4px solid gray")};
  padding-left: 5px;

  width: 100%;
  position: relative;
  height: 50px;
  margin: auto;
  margin-bottom: 10px;
  &:after {
    position: absolute;
    content: "▼";
    top: 30%;
    font-size: 15px;
    right: 10px;
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      &:after {
        content: "▲";
      }
    `}
  font-size: 20px;
`;
export const StyledSelectMainContainerTextWrapper = styled.div`
  padding-bottom: 10px;
`;
export const StyledMultiSelectLabel = styled.label`
  color: #c6c6c6;
  font-size: 12px;
`;
export const StyledMultiSelectList = styled.ul`
  list-style: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  height: 200px;
  overflow: auto;
`;
export const StyledStyledMultiSelectListItem = styled.li`
  list-style: none;
  width: 100%;
`;
export const StyledButton = styled.button`
  margin-left: 260px;
  width: 100px;

  background-color: #ff6b01;
  border: 0;
  padding: 5px 18px;
  font-size: 16px;
  color: white;
  text-align: center;
`;
export const StyledOpenMultiSelectWrapper = styled.div`
  position: absolute;
  width: 360px;
  background-color: white;
  z-index: 100;
`;
export const StyledCheckboxSpan = styled.span`
  width: 20px;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
`;
export const StyledChechboxContainer = styled.div`
  width: 22px;
  height: 20px;
  margin: auto 5px auto 5px;
  border-radius: 2px;
  border: 1px solid rgba(100, 100, 100, 0.4);
`;
export const StyledEmployCardWrapper = styled.div`
  box-shadow: 3px 3px 11px -3px rgba(0, 0, 0, 0.25);
  margin: 10px;
  width: 200px;
  height: 200px;
  border: 0.2px solid #ff9900;
  transition: 0.5s ease;
  transform: ${({ left, right }) =>
    left
      ? "perspective(3em) rotateX(0deg) rotateY(2.175deg) rotateZ(0deg)"
      : null};
  transform: ${({ right }) =>
    right
      ? "perspective(3em) rotateX(0deg) rotateY(-2.175deg) rotateZ(0deg)"
      : null};
  &:hover {
    box-shadow: 3px 3px 11px -3px rgba(0, 0, 0, 0.75);
    transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
`;
export const StyledEmployerCardsWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const FlexWrapper = styled.div`
  display: flex;
`;
