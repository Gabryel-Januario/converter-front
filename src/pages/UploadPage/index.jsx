import React, { useRef } from "react"
import "./style.css"
import Input from "../../components/input"
import Button from "../../components/Button"

import { useLocation } from "react-router-dom"

const UploadPage = () => {
  const location = useLocation()
  const method = location.state?.method

  const fileInputRef = useRef(null)

  const handleUpload = async () => {
    const file = fileInputRef.current?.files[0]
    if (!file) {
      alert("Selecione um arquivo antes de enviar.")
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("method", method)

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        const result = await response.json()
        alert(`Upload bem-sucedido: ${result.message}`)
      } else {
        const error = await response.json()
        alert(`Falha ao fazer o upload do arquivo. Error: ${error.error}`)
      }
    } catch (err) {
      console.error(err)
      alert("Erro ao enviar arquivo.")
    }
  }

  return (
    <>
      <h1>Faça o upload do seu arquivo!</h1>
      <div id="input">
        <Input label={"Arquivo Word(docx)"} ref={fileInputRef} />
      </div>
      <Button title={"Submit"} onClick={handleUpload} />
    </>
  )
}

export default UploadPage
