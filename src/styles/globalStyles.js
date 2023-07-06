import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }
`;

export const BtnClear = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  i {
    font-size: 35px;
    font-weight: 400;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 49rem;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  color: #1a1a1a;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #1a1a1a;
  margin-right: 10px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 10px 40px;
  width: 112px;
  height: 50px;
  background-color: #1a1a1a;
  border-radius: 10px;
  border: 2px solid #1a1a1a;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: transparent;
    border: 2px solid #1a1a1a;
    color: #1a1a1a;
  }
`;

export const Item = styled.li`
  color: #fff;
  padding: 8px 24px 8px 24px;
  width: 354px;
  min-height: 50px;
  background-color: ${(props) => (props.checked ? "#1a1a1a" : "#fff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  transition: .5s;
  flex-wrap: wrap;

  & > p {
    text-decoration-line: ${(props) =>
      props.checked ? "line-through" : "none"};
    color: ${(props) => (props.checked ? "#fff" : "#1a1a1a")};
  }

  button {
    color: ${(props) => (props.checked ? "#fff" : "#1a1a1a")};
  }
`;

export const IconsGroup = styled.div`
  display: flex;

  button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    margin-left: 5px;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;
