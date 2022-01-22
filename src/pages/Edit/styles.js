import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 25px;
  height: 400px;

  h1 {
    color: #000;
    font-size: 2.4rem;
    padding: 1rem;
  }

  .data {
    max-width: 400px;
    margin: 0 auto;
  }

  .campo1,
  .campo2,
  .campo3 {
    display: flex;
    max-width: 450px;
    margin: 30px auto;
    align-items: center;
  }
  .campo1 span,
  .campo2 input {
    flex: 1;
    margin-left: 30px;
  }
  .campo1 label,
  .campo2 p,
  .campo3 p {
    font-size: 1.6rem;
  }
  .campo2 input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 1.3rem;
  }
  .icon.false {
    color: #fff;
    background-color: red;
    margin-left: 10px;
    margin-top: 4px;
  }

  .icon.true {
    color: #fff;
    background-color: #3ca425;
    margin-left: 10px;
    margin-top: 4px;
  }

  button {
    font-size: 1.6rem;
    padding: 1rem;
    color: white;
    border-radius: 5px;
    background: #3ca425;
    width: 100%;
    border: 0px;
    margin-top: 1rem;
  }
`;
