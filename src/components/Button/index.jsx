import React from "react"
import StyledButton from "./style"

function Button({ title, description, onClick, method }) {
  return (
    <StyledButton onClick={onClick} >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledButton>
  )
}

export default Button
