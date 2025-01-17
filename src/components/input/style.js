import styled from "styled-components"

const StyleInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;

  label {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.52);
    margin-bottom: 10px;
  }

  .file-upload-container {
    position: relative;
    display: inline-block;
    width: 500px;
    height: 40px;

    background: linear-gradient(
      to top,
      rgba(255, 75, 93, 0.35),
      rgba(0, 0, 0, 0.21)
    );
    border: 2px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(255, 75, 93, 0.66);
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
      font-size: 14px;
      color: rgba(211, 211, 211, 1);
      transition: all 0.2s ease;

      i {
        margin-right: 10px;
      }

      &:hover {
        color: rgba(0, 0, 0, 0.64);
        background: linear-gradient(
          to top,
          rgba(255, 75, 93, 0.35),
          rgba(0, 0, 0, 0.21)
        );
      }

      &:active {
        color: rgba(255, 75, 93, 0.16);
      }
    }
  }
`

export default StyleInput
