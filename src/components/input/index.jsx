import React from "react"
import styleInput from "./style"

function Input({ label }) {
  return (
    <styleInput action="#" method="POST" enctype="multipart/form-data">
      <label htmlFor="file-upload">{label}</label>
      <input type="file" id="file-upload" name="file-upload" />
    </styleInput>
  )
}

export default Input
