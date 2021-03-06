import styled from "styled-components";
import { theme } from "assets/styles/theme";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  max-width: 400px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  `;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
