import React from "react"
import StyledMethod from "./style"

function Method({ title, description, onClick, method }) {
  return (
    <StyledMethod onClick={onClick} method={method}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledMethod>
  )
}

export default Method
