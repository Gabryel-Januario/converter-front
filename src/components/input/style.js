import styled from "styled-components"

const StyleInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;

 

  .file-upload-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 500px; /* Tamanho máximo para manter a responsividade */
    height: 45px;
    background: linear-gradient(
      to top,
rgba(255, 75, 93, 0.39),
rgba(211, 47, 47, 0.6)
    ); /* Gradiente vermelho */
    border: 2px solid #d32f2f; /* Borda vermelha */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      border-color: #c2185b; /* Cor mais intensa de vermelho no hover */
    }

    .file-input {
      display: none;
    }

    .upload-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      cursor: pointer;
      font-size: 15px;
      color: #fff; /* Cor do texto branca para contraste */
      font-weight: 600;
      transition: all 0.3s ease;

      i {
        margin-right: 10px;
      }

      &:hover {
        color: #fff;
        background: linear-gradient(
          to top,
          #ff4b5d,
          #d32f2f
        ); /* Mantém o gradiente no hover */
      }

      &:active {
        color: rgba(255, 255, 255, 0.8);
        background: #c2185b; /* Cor mais forte de vermelho no click */
      }
    }
  }
`

export default StyleInput
