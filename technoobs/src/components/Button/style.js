import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 420px;
  height: 52px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1px;
  background-color: #f08700;
  color: white;
  font-family: "VT323";
  font-size: 20px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px #000000;
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;
