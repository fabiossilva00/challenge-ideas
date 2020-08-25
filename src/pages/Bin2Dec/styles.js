import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ContainerDecimal = styled.div`
    width: 30vw;
    padding: 25px;
`;

export const Label = styled.label`
  width: 30vw;
  padding: 25px 0px;
  font-size: 3vh;
`;

export const ErrorLabel = styled.label`
  width: 30vw;
  font-size: 2vh;
  color: red;
  height: 3.5vh;
  align-self: center;
  padding-top: 10px;
  font-weight: bold;
  align-items: center;
`;

export const Input = styled.input`
  height: 7.5vh;
  width: 30vw;
  padding-top: 5px;
  font-size: 4vh;
  padding: 0px 15px;
`;
