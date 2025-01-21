import React from "react"
import StyleInput from "./style"

function Input({ ref, inputName, onChange }) {
  return (
    <StyleInput action="#" method="POST" enctype="multipart/form-data">
      <div className="file-upload-container">
        <input
          type="file"
          id="file-upload"
          name="file-upload"
          ref={ref}
          className="file-input"
          onChange={onChange}
        />
        <label htmlFor="file-upload" className="upload-button">
          <i className="fa fa-upload">{inputName}</i>
        </label>
      </div>
    </StyleInput>
  )
}

export default Input
