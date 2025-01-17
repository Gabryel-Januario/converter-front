import styled from "styled-components"

const StyledMethod = styled.button`
  color: transparent;
  background: linear-gradient(to right, #ff4b5d, rgba(0, 0, 0, 0.63));
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  max-width: 270px;
  margin: 10px auto;
  text-align: left;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }

  p {
    font-size: 12px;
    color: #fff;
    margin: 5px 0 0;
  }

  &:hover {
    background-color: #ab69c6;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #8e44b5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(165, 105, 189, 0.7);
  }
`

export default StyledMethod
