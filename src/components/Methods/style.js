import styled from "styled-components";

const StyledMethod = styled.button`
  color: transparent;
  background: linear-gradient(to right, #ff4b5d, #ff8566); /* Gradiente atualizado */
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
    color: #ffffff;
  }

  p {
    font-size: 12px;
    color: #ffffff;
    margin: 5px 0 0;
  }

  &:hover {
    background: linear-gradient(to right, #ff8566, #ab69c6); /* Cor de hover mais suave */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background: linear-gradient(to right, #e55b50, #8e44b5); /* Tom mais forte para active */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 75, 93, 0.7); /* Cor de foco combinando com o tema */
  }
`;

export default StyledMethod;
