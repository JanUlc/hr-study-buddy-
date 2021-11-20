import React from "react";
import { Input } from "components/atoms/Input/Input.styles";
import { StatusInfo, SearchBarWrapper } from "./SearchBar.styles";

export const SearchBar = () => {
  return(
    <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
     <strong><p>Teacher</p></ strong>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
  )
  };
