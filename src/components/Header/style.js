import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: rgba(214, 214, 214, 0.43); 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ddd; 
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.45); 

  h1 {
    margin: 0;

    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1;

    
    color: transparent;
    background: linear-gradient(to top, #ff4b5d, #000000);
    -webkit-background-clip: text; 
    background-clip: text; 
    -webkit-text-fill-color: transparent; 
  }
`;

export default StyledHeader;
