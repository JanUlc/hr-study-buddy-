import styled from "styled-components";

export const StyledButton = styled.button`
  width: 25px;
  heigth: 25px;
  backgorund-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  svg {
    width: 100%;
    heigth: 100%;
  }
`;
