import React from "react";
import { StyledEmployCardWrapper } from "./styledComponents";

const EmployCard = ({ employ, index, length }) => {
  console.log(index);
  const { name, surname } = employ;
  return (
    <StyledEmployCardWrapper
      left={index + 1 < length / 2}
      right={index > length / 2}
    >
      name:{name}, surname:{surname}
    </StyledEmployCardWrapper>
  );
};

export default EmployCard;
