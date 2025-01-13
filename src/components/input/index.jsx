import React from "react"
import StyleInput from "./style"

function Input({ label, ref }) {
  return (
    <StyleInput action="#" method="POST" enctype="multipart/form-data">
      <label htmlFor="file-upload">{label}</label>
      <input type="file" id="file-upload" name="file-upload" ref={ref} />
    </StyleInput>
  )
}

export default Input
