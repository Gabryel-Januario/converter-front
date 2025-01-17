import styled from "styled-components"

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;

  padding: 10px;
  background: linear-gradient(to right, rgb(252, 252, 252), rgb(164, 164, 164));
  color: black;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin: 0;
  padding-left: 0;
  padding-right: 0;

  h2 {
    color: rgba(0, 0, 0, 0.46);
  }
`

export default StyledHeader
