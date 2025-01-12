import React from "react"
import "./style.css"
import Input from "../../components/input"

const UploadPage = () => {
  return (
    <>
      <h1>Faça o upload do seu arquivo!</h1>
      <div id="input">
        <Input label={"Arquivo Word(docx)"} />
      </div>
    </>
  )
}

export default UploadPage
