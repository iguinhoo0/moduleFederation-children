import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: purple;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  row-gap: 20px;

  p {
      font-size: 22px;
      font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: #fff;
  border: 2px solid #000;;
  cursor: pointer;
  border-radius: 5px;
`;
