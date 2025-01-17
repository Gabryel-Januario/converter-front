import React from "react"
import StyleInput from "./style"

function Input({ label, ref }) {
  return (
    <StyleInput action="#" method="POST" enctype="multipart/form-data">
      <label htmlFor="file-upload">{label}</label>
      <div className="file-upload-container">
        <input
          type="file"
          id="file-upload"
          name="file-upload"
          ref={ref}
          className="file-input"
        />
        <label htmlFor="file-upload" className="upload-button">
          <i className="fa fa-upload"></i> Selecionar Arquivo
        </label>
      </div>
    </StyleInput>
  )
}

export default Input
