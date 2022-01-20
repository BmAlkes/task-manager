import styled from "styled-components";

export const Form = styled.form`
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 25px;
  height: 200px;

  h1 {
    color: #000;
    text-align: center;
    font-size: 2.4rem;
    padding: 1.3rem;
  }

  div {
    margin: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div input {
    width: 400px;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #000;
  }
  .icon {
    font-size: 2.2rem;
    padding: 0.4rem;
    color: white;
    border-radius: 5px;
    background: #3ca425;
    margin-left: 15px;
  }
`;

export const Container = styled.div`
  ul {
    padding: 1rem;
  }
`;
