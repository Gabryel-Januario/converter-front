import styled from "styled-components"

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white; /* Deixa a cor transparente para que o gradiente seja visível */
  background: linear-gradient(to right bottom, #ff4b5d, rgba(0, 0, 0, 0.72));
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.64);
        background: linear-gradient(
          to right bottom,
          rgba(255, 75, 93, 0.78),
          rgba(0, 0, 0, 0.48)
        );
  }

  &:active {
    background-color: #4c7abf;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`

export default StyledButton
