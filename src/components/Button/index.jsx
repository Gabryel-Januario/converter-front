import React from "react"
import StyledButton from "./style"

function Button({ onClick, title }) {
  return (
    <StyledButton onClick={onClick} type="submit">
      {title}
    </StyledButton>
  )
}

export default Button
